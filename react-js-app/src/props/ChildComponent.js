import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child")}>Click Me</button>
    </div>
  );
};

export default ChildComponent;
