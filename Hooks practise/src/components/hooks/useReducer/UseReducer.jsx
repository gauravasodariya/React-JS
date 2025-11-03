import { useReducer } from 'react';
// export const UseReducer = () => {
//     const reducer = (state,action)=>{
//         switch (action.type) {
//         case "INCREMENT":
//           return state+1 ;

//         case "DECREMENT":
//           return state-1 ;

//         case "RESET":
//           return  state=0 ;

//         default:
//           return state;
//     }
// }
//     const [count, dispatch] = useReducer(reducer, 0); 
//     return (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
//   </div>
//   )
// };


//here we define object to handle multiple states
export const UseReducer = () => {
  const initialState = {
  count: 0,
  theme: "light"
};
  function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "TOGGLE_THEME":
      return {
        ...state, //keep other state properties unchanged
        theme: state.theme === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
}

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "white" : "black",
        color: state.theme === "light" ? "black" : "white",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px"
      }}>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <h2>Current Theme: {state.theme}</h2>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};
