import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
   const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
     <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <Child getItem={getItem} />
    </div>
  );
}