//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import {useEffect,useState } from "react";

export const Challenge = ()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        document.title = `Count: ${count}`;
    },[count]);

return (
    <>
    <p>Count : {count}</p>
    <button onClick={() =>setCount(count+1)}>Increment</button>
    <p>Name : {name}</p>

    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    </> 
  )
}