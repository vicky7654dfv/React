import React, { useState } from 'react'

export default function OnClick() {

    const [count, setCount]=useState(0)

    function incr(){
        setCount(count+1)
        alert("Incremented")
    }

    return (
    <div>
        <p>Counting: {count}</p>
        <button onClick={incr}>increment</button>
    </div>
  )
}
