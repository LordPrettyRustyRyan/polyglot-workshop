import { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={() =>   setUser(prev => prev === "Imagine" ? "Harry Bhai" : "Imagine")}>
        Change User
      </button>
    </div>
  );
}

export default Home;
