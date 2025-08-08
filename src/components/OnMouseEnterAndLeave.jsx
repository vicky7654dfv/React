import React, { useState } from "react";

export default function OnMouseEnter() {
  const [color, setColor] = useState("green");

  function handleEnter() {
    setColor("indigo");
  }
  function handleLeave() {
    setColor("blue");
  }

  return (
    <div
      style={{ background: color, width: "200px", height: "200px" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Hover this text
    </div>
  );
}
