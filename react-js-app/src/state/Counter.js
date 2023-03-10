import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  async incrementAsync() {
    await this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  incrementSetStateByPassingArrowFunction() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  // this will increase only once as React groups multiple setState statement to one single update
  incrementThreeWillNotWork() {
    this.increment();
    this.increment();
    this.increment();
  }

  async incrementThreeWillWorkWithIncrementAsync() {
    await this.incrementAsync();
    await this.incrementAsync();
    await this.incrementAsync();
  }

  incrementThreeWillWork() {
    this.incrementSetStateByPassingArrowFunction();
    this.incrementSetStateByPassingArrowFunction();
    this.incrementSetStateByPassingArrowFunction();
  }

  incrementSetStateWithCallback() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("state value from callback ", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  incrementWithoutSetState() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.count = this.state.count + 1;
    console.log(this.state.count);
  }

  render() {
    return (
      <div style={{ background: "#ffabcd" }}>
        <mark>
          This is from Counter class component example for using setState() in
          react
        </mark>
        <h2>Counter : {this.state.count}</h2>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementAsync()}>Increment Async</button>
        <button onClick={() => this.incrementWithoutSetState()}>
          Increment Doesn't Work
        </button>
        <button onClick={() => this.incrementSetStateWithCallback()}>
          Increment setState With Callback
        </button>
        <button onClick={() => this.incrementThreeWillNotWork()}>
          Increment Three Will Not Work
        </button>
        <button onClick={() => this.incrementThreeWillWorkWithIncrementAsync()}>
          Increment Three Will Work With Increment Async
        </button>
        <button onClick={() => this.incrementSetStateByPassingArrowFunction()}>
          Increment Count By Passing Arrow Function to SetState
        </button>
        <button onClick={() => this.incrementThreeWillWork()}>
          Increment Three Will Work
        </button>
        <p>
          <b>Note: </b>Observe behavior in browser dev tools {">"} Console.
        </p>
      </div>
    );
  }
}

export default Counter;
