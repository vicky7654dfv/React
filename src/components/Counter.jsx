import React, { useState } from "react";
import styles from "./Counter.module.css"

export default function Greeting() {
    
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count+1)
    }

    function decrement() {
        setCount(count-1)
    }

    function reset() {
        setCount(0)
    }

    return(
        <div>
            <h1>Count: {count}</h1>
            <button className={styles.btn} onClick={increment}>+</button> <br />
            <button className={styles.btn} onClick={decrement}>-</button> <br />
            <button className={styles.btn} onClick={reset}>Reset</button> <br />
        </div>
    )
}