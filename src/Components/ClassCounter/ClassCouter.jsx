import React, { Component } from "react";
// import { CounterClassChild } from "./CounterClassChild";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleIncreament = () => {
    this.setState((Anyname) => ({ count: Anyname.count + 1 }));
  };
  handleDecreament = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.handleIncreament}>Increment</button>
        <button onClick={() => this.handleDecreament()}>Decrement</button>
      </div>
    );
  }
}
