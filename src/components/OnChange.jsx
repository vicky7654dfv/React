import React, { useState } from "react";

export default function OnChange() {
  const [text, setText] = useState("");

  function changeNow(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={text} onChange={changeNow} />
      <p>Your text area: {text}</p>

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quibusdam error dicta vel nobis, laboriosam quaerat voluptas eveniet
        possimus, commodi sequi fugit enim accusantium voluptatibus repudiandae
        placeat culpa nemo ab.{text}
      </h1>
    </div>
  );
}
