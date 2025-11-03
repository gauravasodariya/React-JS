import { useState } from "react";
import Message from "./Message";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
       
       {/* passing same props every time,so that i dont want to re re-render Message component */}
      <Message text="Hello React" />
    </div>
  );
};
