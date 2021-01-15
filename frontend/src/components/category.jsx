import React, { Component } from "react";
import { Link } from "react-router-dom";

class Category extends Component {
  state = {
    categories: ["Category 1", "Category 2", "Category 3", "Category 4"],
  };
  render() {
    const { categories } = this.state;
    return (
      <div style={{ border: "2em solid lightblue", margin: "1em" }}>
        {categories.map((category) => (
          <div
            key={category}
            style={{
              border: "0.25em solid lightblue",
              margin: "1em",
              textAlign: "center",
            }}
          >
            <Link to={`/gifts/${category}`}>
              <h3>{category}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
