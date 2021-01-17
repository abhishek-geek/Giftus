import React, { Component } from "react";

class Gift extends Component {
  render() {
    const { gift } = this.props;
    // {
    //   console.log("Category : ", gift.category);
    // }
    return (
      <div style={{ border: "10px solid lightblue", margin: "10px" }}>
        <h4>{gift.name}</h4>
        <p>Price : {gift.price}</p>
        {/* <p>
          Suitable for :
          {gift.category.map((c) => (
            <span> {c}, </span>
          ))}
        </p> */}
        <p>
          Buying link :{" "}
          <a href={gift.link} target="_blank">
            at just rs {gift.price}
          </a>
        </p>
      </div>
    );
  }
}

export default Gift;
