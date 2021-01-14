import React, { Component } from "react";

class Gift extends Component {
  state = {
    name: "Name of the Product",
    price: "$100",
    link: "",
    category: "",
  };
  render() {
    const { name, price, link } = this.state;

    return (
      <div style={{ border: "10px solid lightblue", margin: "10px" }}>
        <h4>Gift Component</h4>
        <p>{name}</p>
        <p>Price : {price}</p>
        <p>Buying link : {link}</p>
      </div>
    );
  }
}

export default Gift;
