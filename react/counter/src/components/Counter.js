import { useState } from "react";
const Counter = () => {
 // Destructuring de tableau
 const [counterValue, setCounterValue] = useState(10);
  return (
    <section>
      <button
      onClick={() => {setCounterValue(counterValue - 1) }}>-</button>
      <button>{counterValue}</button>
      <button onClick={() => {setCounterValue(counterValue +1 ) }}>+</button>
    </section>
  );
}

export default Counter;