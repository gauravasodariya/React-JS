import React from "react";

const Message = () => {
  
  return <h2>{new Date().toLocaleTimeString()}</h2>;
};

export default React.memo(Message); 
