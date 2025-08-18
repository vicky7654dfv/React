import React, { useContext } from "react";
import { Pass } from "./A";
export default function C() {
  const passName = useContext(Pass);
  return (
    <div>
        <h1>C component {passName}</h1>
    </div>
  );
}
