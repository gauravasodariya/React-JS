export const ParentComponent = () => { // Top-level component
  return (
      <ChildComponent data="React JS" />
  );
};

const ChildComponent = (props) => { // Intermediate component
  return (
    <>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => { // Intermediate component
  return (
    <>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => { // Bottom-level component
  return (
    <>
      <h2>Hello, I love {props.data}</h2>
    </>
  );
};