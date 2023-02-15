import React, { Component } from "react";

class Namaste extends Component {
  render() {
    const {
      name,
      agentCodes: [code1, code2],
    } = this.props;
    return (
      <>
        <h1>Namaste, {name}</h1>
        <h2>
          Agent Codes: {code1}, {code2}
        </h2>
      </>
    );
  }
}

export default Namaste;
