import React, { useState } from "react";

export default function Greeting({ name = "vicky", age = 23 }) {
  // const[stateVariable,setStartFunction]=useState(initial value)
  const [count, setcount] = useState(0);
  console.log("count", count);

  return (
    <div>
      <h3>
        Hello {name} , your age is: {age}
      </h3>
      <p>Count: {count}</p>
      <button onClick={() => setcount(count + 1)}>increment</button>
    </div>
  );
}
