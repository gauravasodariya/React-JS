import {useEffect,useState } from "react";

export const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count);
        
    },[count]);

return (
    <>
    <p>Count : {count}</p>
    <button onClick={() =>setCount(count+1)}>Increment</button>
    </>
    )
}
