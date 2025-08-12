import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [sec, setSec]=useState(0)

  useEffect(()=>{
    const interval=setInterval(()=>{
        setSec((prev)=>prev+1)
    },1000)
    return () => clearInterval(interval)
  },[])
    return (
    <div>
        <h1>Timer: {sec}</h1>
    </div>
  )
}