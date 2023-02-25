import React, { Component } from "react";

class ClassEventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  /*Notice the clickHandler as arrow function in the below line.*/
  clickHandler = () => {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
    console.log(this); // this will log class instance object
  };

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>ClassEventBinding Click</button>
      </div>
    );
  }
}

export default ClassEventBinding;
