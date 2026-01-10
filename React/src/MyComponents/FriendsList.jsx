import React, { useState } from 'react'

export default function FriendsList() {
    // simplistic approach w/index
    const friends = ["Chloe", "Sid", "Imagine", "Harry"];

    // real-world approach w/id
    const [users, setUsers] = useState([
        { id: 1, name: "Imagine", age: 22 },
        { id: 2, name: "Chloe", age: 20 },
        { id: 3, name: "Harry", age: 28 }
    ]);

    // making it dynamic w/user deletion
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>Friends: </h2>

            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>{friend}</li>
                ))}
            </ul>
            <hr />

            <h2>Users: </h2>
            
            {users.map(user => (
                <div key={user.id} style={{marginBottom: "10px"}} className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className='col'><h3>{user.name}</h3></div>
                    <div className='col'><p>{user.age}</p></div>
                    <div className='col'><button onClick={() => deleteUser(user.id)}>Delete</button></div>
                </div>
            ))}
        </div>
    )
}
