import React, { useEffect, useState } from "react";

export default function Child({getItem}) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItem());
    console.log("Updating item");
  }, [getItem]);

  return (
    <div>
      {item.map((item) => (
        <div key={item}> {item}</div>
      ))}
    </div>
  );
}