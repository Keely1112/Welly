import { useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={handlePlusCount}>+1</button>
      <div>{count}</div>
      <button onClick={handleMinusCount}>-1</button>
    </>
  );
}

export default CounterComponent;
