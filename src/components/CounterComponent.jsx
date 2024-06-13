import React from "react";

const CounterComponent = ({ count, plus, reset, minus }) => {
  return (
    <>
      <h1>count Task</h1>
      <h2>count value: {count}</h2>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={plus}>+</button>
    </>
  );
};

export default CounterComponent;
