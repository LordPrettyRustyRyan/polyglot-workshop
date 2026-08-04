import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Timer Started");

        const interval = setInterval (() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("Timer Stopped");
            clearInterval(interval);
        };
    }, []);

  return (
    <div>
      <h2>Seconds passed: {seconds}</h2>
    </div>
  )
}
