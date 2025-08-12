import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(()=>{
    if(isRunning)
    {
       let interval= setInterval(()=>{
            setSec((prev)=>prev+1)
        },1000)
        return ()=> clearInterval(interval)
    }
  },[isRunning])

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setSec(0);
  };
  return (
    <div>
      <h1>Time:: {sec}</h1>
      <button onClick={handleStart}>Start</button> <br />
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
    </div>
  );
}
