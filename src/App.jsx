import React from "react";
import Counter from "./components/Counter.jsx";
import OnClick from "./components/OnClick.jsx";
import OnChange from "./components/OnChange.jsx";
import OnSubmit from "./components/OnSubmit.jsx";
import OnMouseEnterAndLeave from "./components/OnMouseEnterAndLeave.jsx";
import ConditionalRendering from "./components/ConditionalRendering.jsx";
import ListRendering from "./components/ListRendering.jsx";
import ToggleLightMode from "./components/ToggleLightMode.jsx";
import HandlingInput from "./components/HandlingInput.jsx";
import MultiInput from "./components/MultiInput.jsx";
import ValueChangeUsingUseEffect from "./components/ValueChangeUsingUseEffect.jsx";
import ClearUpFunction from "./components/ClearUpFunction.jsx"
import Timer from "./components/Timer.jsx";
import ApiUseEffect from "./components/ApiUseEffect.jsx";
import StopWatch from "./components/StopWatch.jsx";

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
            <ConditionalRendering />
            <ListRendering />
            <ToggleLightMode />
            <Counter />
            <HandlingInput />
            <MultiInput />
            <ValueChangeUsingUseEffect />
            <ClearUpFunction />
            <Timer />
            <ApiUseEffect />
            <StopWatch />
          </div>
        )}
        
      </div>
    </>
  );
}
