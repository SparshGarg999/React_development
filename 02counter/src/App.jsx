import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log(counter);

    if (counter < 20) setCounter(counter + 1);
    console.log(counter);
  };

  const decreaseValue = () => {
    if (counter)
      setCounter((prev) => {
        if (prev < 20) return prev + 1;
        return prev;
      });
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
