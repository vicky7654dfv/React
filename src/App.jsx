import React, { useReducer } from "react";

export default function App() {
  const initial = { count: 0 };
  const [state, dispatch] = useReducer(reducerFunction, initial);

  function reducerFunction(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> <br />
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
