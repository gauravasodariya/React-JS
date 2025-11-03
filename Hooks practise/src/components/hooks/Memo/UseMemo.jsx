import { useState, useMemo } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const slowFunction = (num) => {
    for (let i=0;i<1000000000;i++) 
    {
        num+=1;
    }
    return num;
  };

  const double = useMemo(() => {
    return slowFunction(count)
}, [count]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={themeStyle}>
      <h2>Count: {count}</h2>
      <h3>Double: {double}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
};

//React runs slowFunction(count) only when count changes.

// If you just toggle the theme, it won’t recalculate or re-run the function and it used the memoized value.