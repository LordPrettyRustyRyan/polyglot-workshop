import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './MyComponents/Component'
import Navbar from './MyComponents/Navbar'
import Textform from './MyComponents/Textform'
import ConditionalPopUp from './MyComponents/ConditionalPopUp'
import FriendsList from './MyComponents/FriendsList'
import FormExample from './MyComponents/FormExample'
import BigForm from './MyComponents/BigForm'
import Timer from './MyComponents/Timer'
import Users from './MyComponents/Users'
import UserContext from "./MyComponents/UserContext";
import Home from "./MyComponents/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./MyComponents/About";

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("Imagine");

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <ConditionalPopUp />
        <Textform heading="Enter the text to analyze" />
        <hr />

        <div className="row row-cols-1 row-cols-md-2">
          <div className="col"><FriendsList /></div>
          <div className="col"><FormExample /></div>
        </div>
        <hr />
        <BigForm />
        <hr />

        <Timer />
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Toggle Component
        </button>
        {show && <Timer />}
        {/* Agar show false hua → Timer remove (unmount) */}

        <hr />
        <Users />
        <hr />

        <UserContext.Provider value={{ user, setUser }}>
          <Home />
        </UserContext.Provider>

        <hr />
        <Router>
          <nav>
            <Link to="/about">About</Link>
          </nav>

          <Routes>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

      </div>
      {/* <hr/> */}

      {/* <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col"><Component name="Imagine" age={22} /></div>
          <div className="col"><Component name="Harry Bhai" age={28} /></div>
          <div className="col"><Component name={22} age={22} /></div>
          <div className="col"><Component name="Harry Bhai" age="Harry Bhai" /></div>
          <div className="col"><Component name="" age={22} /></div>
          <div className="col"><Component name="Harry Bhai" /></div>
          <div className="col"><Component name="Imagine" age /></div>
          <div className="col"><Component name age={22} /></div>
        </div>
      </div> */}
    </>
  )
}

export default App