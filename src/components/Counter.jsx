import React from "react";
import CounterComponent from "./CounterComponent";
const Counter = ({ count, plus, reset, minus }) => {
  return (
    <>
      <CounterComponent count={count} plus={plus} reset={reset} minus={minus} />
    </>
  );
};

export default Counter;
