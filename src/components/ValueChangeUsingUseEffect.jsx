import React, { useEffect, useState } from 'react'

export default function ValueChangeUsingUseEffect() {
  
    const [count, setCount]=useState(0)

    useEffect(()=>{
        console.log(`Count value: ${count}`);
    },[count])

    return (
    <div>
        <h2>count: {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>+</button>
    </div>
  )
}