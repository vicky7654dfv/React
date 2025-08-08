import React from "react";
import Counter from "./components/Counter.jsx";
import OnClick from "./components/OnClick.jsx";
import OnChange from "./components/OnChange.jsx";
import OnSubmit from "./components/OnSubmit.jsx";
import OnMouseEnterAndLeave from "./components/OnMouseEnterAndLeave.jsx";
import ConditionalRendering from "./components/ConditionalRendering.jsx";
import ListRendering from "./components/ListRendering.jsx";
import ToggleLightMode from "./components/ToggleLightMode.jsx";

export default function App() {
  let done=false;
  return (
    <>
    <div className="main-body">
        {done && (
          <div>
            <Greeting />
            <OnSubmit />
            <OnChange />
            <MouseEnter />
            <OmMouseLeaves />
            <Counter />
            <ConditionalRendering />
          </div>
        )}
        <ListRendering />
        <ToggleLightMode />
      </div>
    </>
  );
}
