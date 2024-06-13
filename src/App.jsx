import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  let [count, setcount] = useState(5);

  function addValue() {
    console.log("Increasing ", count);
    if (count < 20) {
      setcount(count + 1);
    }
  }

  function removeValue() {
    console.log("Decreasing ", count);
    if (count > 0) setcount(count - 1);
  }

  function reset() {
    console.log("Reset ", count);
    setcount((count = 0));
  }
  return (
    <>
      <Counter
        count={count}
        plus={addValue}
        reset={reset}
        minus={removeValue}
      />
    </>
  );
}

export default App;
