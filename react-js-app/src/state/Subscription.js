import React, { Component } from "react";

class Subscription extends Component {
  //this is how you get props in constructor
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      message: <h1>Welcome {props.name}</h1>,
    };
  }

  changeMessage() {
    this.setState({
      message: <h1>Thank you for Subscription, {this.props.name}</h1>,
    });
  }

  reset() {
    this.setState({
      message: <h1>Welcome {this.props.name}</h1>,
    });
  }
  render() {
    return (
      <div style={{ background: "#fbf0ff" }}>
        <mark>
          This is from Subscription class component example for state in react
        </mark>
        {this.state.message}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Subscription;
