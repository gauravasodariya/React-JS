import { createContext, useContext } from "react";

const UserContext = createContext(); //createContext makes context object Think of it as an empty box waiting to hold data.

const Parent = () => {
  const user = "Gaurav";
  return (
    //Every component inside <UserContext.Provider> can access data. here child component can access user data.
    <UserContext.Provider value={user}> 
      <Child />
    </UserContext.Provider>
  );
};

const Child = () => {
// //useContext(UserContext) means: Go to UserContext box and read/get the data which is "Gaurav"
  const user = useContext(UserContext);
  return <h2>Hello, {user}!</h2>;
};

export default Parent;
