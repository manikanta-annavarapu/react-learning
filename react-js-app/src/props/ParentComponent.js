import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this); //binding is important
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}.`);
  }

  render() {
    return (
      <>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </>
    );
  }
}

export default ParentComponent;
