import React, { Component } from "react";

export class Classes extends Component {
  state = { name: "Khaja", age: 25 };
  render() {
    return (
      <div>
        <h1>
          Class Coponent {this.state.name} {this.state.age}{" "}
        </h1>
      </div>
    );
  }
}
