import React from 'react'
import { useState } from 'react';

function ConditionalPopUp() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [status, setStatus] = useState("idle");

    return (
        <div>
            {/* <h2>{isLoggedIn ? "Welcome Imagine!" : "Please log in."}</h2> */}

            {status === "idle" && <h2>Click any button to begin</h2>}
            {status === "loading" && <h2>Loading...</h2>}
            {status === "error" && <h2 style={{ color: "red" }}>Something went wrong!</h2>}
            {status === "success" && <h2>Data successfully loaded!</h2>}

            {/* <button className="btn btn-primary" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button> */}

            <button onClick={() => setStatus("loading")}>Start Loading</button>
            <button onClick={() => setStatus("success")}>Show Success</button>
            <button onClick={() => setStatus("error")}>Show Error</button>
            <button onClick={() => setStatus("idle")}>Reset</button>
        </div>
    )
}

export default ConditionalPopUp;