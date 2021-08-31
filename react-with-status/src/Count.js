import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Count() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  function onClick() {
    ReactDOM.unstable_batchedUpdates(() => {
      setCounter((v) => v + 1);
      setCounter((v) => v + 1);
      setCounter2((v) => v + 1);
    });
  }
  useEffect(() => {
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  });
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onClick}>증가</button>
      <h2>{counter2}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
