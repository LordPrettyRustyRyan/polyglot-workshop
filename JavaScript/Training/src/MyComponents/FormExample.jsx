import React, { useState } from 'react'

export default function FormExample() {
    const [name, setName] = useState("");

    return (
        <div>
            <h2>Enter you Name:</h2>

            <input
            type ="text"
            value ={name}
            onChange={(e) => setName(e.target.value)}
            />

            <p>Your Name: {name}</p>
        </div>
    )
}
