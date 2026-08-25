import { useState } from "react";

function Component({ name, age }) {
    const [userAge, setUserAge] = useState(age || 18); // default 18 if undefined

    console.log({ name, age });

    return (
        <div>
            {/* <hr /> */}
            {/* template literal way '${}'*/}
            <h2>Hello {name ? `${name}` : "unknown user"}!</h2>

            {/* see how backsticks are inside, 
        and why they are important as without them literals won't work 
        and i used ternary way to check for name*/}
            <h6>{`Hello again ${name ? name : "unknown user"}!`}</h6>

            <p>Your age is {age ? `${age} years` : "not provided"}.</p>

            {/* Changeable Age with useState */}
            <p>Your age is {userAge}.</p>

            {/* ternary way to display name */}
            <h4>Bye {name ? name : "unknown user"}!</h4>
            <h4>Bye {name}!</h4>

            <button onClick={() => setUserAge(userAge + 1)}>Increase Age</button>
            <button onClick={() => setUserAge(userAge - 1)}>Decrease Age</button>
            <hr />
        </div>
    );
}

export default Component;