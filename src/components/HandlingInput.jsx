import React, { useState } from "react";

export default function HandlingInput() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2>Controlled text input</h2>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />

      <p>Name is:{name}</p>
      <p>Check box status: {isChecked ?"Checked" :"Not checked"}</p>
    </div>
  );
}
