import React, { useState } from 'react'

export default function BigForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Signup Form</h2>

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />

            <br /><br />

            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
        </div>
    )
}
