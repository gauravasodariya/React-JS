import { useState, useCallback } from "react";

export const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  console.log("Component rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
// without callback hook When you click Increase, the component re-renders and React creates a copy of handleClick() in memory but it doesn’t run it yet


//with this hook when you click Increase, component re-renders 
// But React reuses the same handleClick(),it does not make a new copy.
