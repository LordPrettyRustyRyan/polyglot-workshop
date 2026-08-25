import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);

//         // API CALL
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
        
//         if (!res.ok) {
//           throw new Error("Network error while fetching users");
//         }

//         const data = await res.json();
//         setUsers(data);
//       } 
//       catch (err) {
//         setError(err.message);
//       } 
//       finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []); // runs once, like componentDidMount


// Short Professional Cleaner Version:
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, []);


  if (loading) return <h2>Loading users...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h2>Users List:</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
