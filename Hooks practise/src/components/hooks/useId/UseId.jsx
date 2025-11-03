import { useId } from "react";

export const UseId = () => {
  const nameId = useId(); // Creating a unique ID for the name input field
  const emailId = useId(); // Creating a unique ID for the email input field

  return (
    <form>
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} type="text" />

      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} type="email" />
    </form>
  );
};
