import React, { useEffect, useState } from 'react'

export default function ClearUpFunction() {

    const [sec, setSec]=useState(0)

    useEffect(()=>{
        console.log("Start timer...");
        const interval = setInterval(()=>{
            setSec((prev)=>prev+1)
        },1000)
        return ()=>{
            console.log("clear up time...");
            clearInterval(interval)           
        }
    },[])

    return (
    <div>
        <h2>seconds: {sec}</h2>
    </div>
  )
}
