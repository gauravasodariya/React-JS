import { useState } from "react";

export const State = () => {
  //create a state variable count with initial value 0.and setCount is function to update the value of count
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}


