import React from "react";

const GreetProps = (props) => {
  const wannaBreakApp = false;
  console.log(props);
  if (wannaBreakApp) {
    console.log("Changing props value...");
    // application breaks when props values are changed here as props are immutable and readonly here.
    props.name = "John";
    console.log(props);
  }

  return (
    <div style={{ background: "beige" }}>
      <mark>
        This is from GreetProps functional component example for props in react
      </mark>
      <h1>Greet {props.name}</h1>
      {props.children}
    </div>
  );
};

export default GreetProps;
