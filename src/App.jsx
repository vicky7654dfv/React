import React from "react";
import A from "./components/A";

export default function App() {
  let done=false;
  return (
    <>
    <div className="main-body">
        {done && (
          <div>
          </div>
        )}
        <A />
      </div>
    </>
  );
}
