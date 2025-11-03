// const users = [
//     {name : 'John Doe', age: 30},
//     {name : 'Jane Smith', age: 25},
//     {name : 'Alice Johnson', age: 28},
//     {name : 'Bob Brown', age: 35},
//     {name : 'Charlie Davis', age: 22}
// ]
// export const DerivedState = () => {
//     return (
//         <div className="main-div">
//             <h2>User List</h2>
//             <ul>
//                 {users.map((currEle,index) =>{
//                    return (
//                    <li key={index}>
//                     {currEle.name} - {currEle.age}
//                    </li>
//                    )
//                 })}
//             </ul>
//         </div>
//     )
// }

import { useState } from "react"
export const DerivedState = () => {
//     const [users,setUser]=useState([
//     {name : 'John Doe', age: 30},
//     {name : 'Jane Smith', age: 25},
//     {name : 'Alice Johnson', age: 28},
//     {name : 'Bob Brown', age: 35},
//     {name : 'Charlie Davis', age: 22}
//     ])
    
//     return (
//        <div className="main-div">
//              <h2>User List</h2>
//              <ul>
//                  {users.map((currEle,index) =>{
//                    return (
//                    <li key={index}>
//                     {currEle.name} - {currEle.age}
//                    </li>
//                    )
//                 })}
//             </ul>
//         </div>
//     )
// }


//example of derived state 
const [count, setCount] = useState(5);
const doubleCount = count * 2;

return (
  <>
    <h1>Count: {count}</h1>
    <h2>Double: {doubleCount}</h2>
    <button onClick={() => setCount(count + 1)}>Increase</button>
  </>
)};
