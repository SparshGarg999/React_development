import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log(counter);

    if (counter < 20) setCounter((prev) => (prev < 20 ? prev + 1 : prev));
    // console.log(counter);
  };

  const decreaseValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello and value is {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
