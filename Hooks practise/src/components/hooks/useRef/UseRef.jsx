import { useRef } from "react";

export const UseRef = () => {
  const inputRef = useRef();  // Creating a reference for input element using useRef hook

  const handleFocus = () => {
    console.log(inputRef.current.value); // Accessing the current value of the input element
    console.log(inputRef.current);
    
  };

  return (
    <>
    <input type="text" ref={inputRef}/>  {/*Attaching the reference to the input element  */}
      <button onClick={handleFocus}>Submit</button>
    </>
  );
};
