import React from "react";

// Observe the we are creating and exporting the function directly in a single line this is one way of doing it
export const Hello = () => {
  const typeToRender = "JSX";
  if (typeToRender === "JSX") {
    // Below is the JSX way of developing UI components
    // Below JSX will late transpiles to the code written in else block
    return (
      <div id="hello" className="hello">
        <h1>Hello Mani from JSX</h1>
      </div>
    );
  } else {
    //Below is the way to develop UI component by directly using React lib methods
    return React.createElement(
      "div", //first param is to mention HTML tag
      { id: "hello", className: "hello" }, //second param is to mention HTML attributes for the HTML tag above
      React.createElement("h1", null, "Hello Mani from React createElement") //third param is to mention the children
    );
  }
};
