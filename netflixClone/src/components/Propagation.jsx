export const Propagation =() => {
  const handleParentClick = () => {
    alert("Parent clicked!");
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // stop the event from bubbling up to the parent
    alert("Child clicked!");
  };

  return (
    <div onClick={handleParentClick} style={{ padding: "50px", border: "2px solid blue" }}>
      Parent Div
      <button onClick={handleChildClick} style={{ marginTop: "20px" }}>
        Child Button
      </button>
    </div>
  );
}
