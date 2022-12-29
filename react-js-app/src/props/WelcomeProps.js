import React, { Component } from "react";

class WelcomeProps extends Component {
  render() {
    return (
      <div style={{ background: "azure" }}>
        <mark>
          This is from WelcomeProps class component example for props in react
        </mark>
        <h1>Welcome {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default WelcomeProps;
