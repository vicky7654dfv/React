import React, { useState } from "react";

export default function ToggleLightMode() {
  const [colour, setColour] = useState("true");
  return (
    <>
      <div
        style={{
          backgroundColor: colour ? "black" : "white",
          color: colour ? "white" : "black",
          padding: "40px",
        }}
      >
        <button onClick={() => setColour(!colour)}>
          Switch to {colour ? "Light" : "Dark"} Mode
        </button>
        <p>You are in {colour ? "Dark" : "Light"} Mode</p>
      </div>

      <div
        style={{
          color: colour ? "red" : "green",
          backgroundColor: colour ? "green" : "red",
          padding: "20px",
        }}
      >
        <button onClick={()=>setColour(!colour)}>
            Switch to {colour?"Red":"Green"} mode
        </button>
        <p>You are in {colour?"Green":"Red"} Mode</p>
      </div>
    </>
  );
}