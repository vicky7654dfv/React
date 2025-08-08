import React, { useState } from "react";

export default function ConditionalRendering() {
  const [show, setShow] = useState(true);
  let condition = true;
  return (
    <>
      <div>{condition ? <p>Hi</p> : <p>Hello</p>}</div>
      <div>
        <button onClick={()=>{setShow(!show)}}>
            {show?"Hide":"Show"} Text
        </button>
      </div>
      {show && <p>This is a text</p>}
    </>
  );
}
