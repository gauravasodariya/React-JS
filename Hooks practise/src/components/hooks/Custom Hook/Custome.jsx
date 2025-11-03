// import { useState } from "react";

// export const CounterOne = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h3>Counter One: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// };

// export const CounterTwo = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h3>Counter Two: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// };

import { useState } from "react";
import { useCounter } from "./UseCounter";
export const CounterOne = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <h3>Counter One: {count}</h3>
      <button onClick={increment}>+</button>
    </>
  );
};

export const CounterTwo = () => {
  const { count, increment } = useCounter();

  return (
    <>
      <h3>Counter Two: {count}</h3>
      <button onClick={increment}>+</button>
    </>
  );
};


