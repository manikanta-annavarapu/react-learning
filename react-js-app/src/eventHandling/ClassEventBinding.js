import React, { Component } from "react";

class ClassEventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "ClassEventBinding Button Clicked",
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}> ClassEventBinding Click</button>
      </div>
    );
  }
}

export default ClassEventBinding;
