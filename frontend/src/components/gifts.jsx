import React, { Component } from "react";
import Gift from "./gift";

class Gifts extends Component {
  state = {
    total: 10,
  };
  render() {
    let arr = [];

    for (let i = 1; i <= this.state.total; i++) {
      arr.push(i);
    }

    return (
      <div>
        <h1>Your Gifts here --:</h1>
        {arr.map((i) => (
          <div key={i}>
            <Gift />
          </div>
        ))}
        <Gift />
      </div>
    );
  }
}

export default Gifts;
