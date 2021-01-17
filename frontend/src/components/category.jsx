import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Category extends Component {
  state = {
    categories: [],
  };
  render() {
    const { categories } = this.state;
    return (
      <div style={{ border: "2em solid lightblue", margin: "1em" }}>
        {categories.map((category) => (
          <div
            key={category._id}
            style={{
              border: "0.25em solid lightblue",
              margin: "1em",
              textAlign: "center",
            }}
          >
            <Link to={`/gifts/${category._id}`}>
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  async componentDidMount() {
    const { data: categories } = await axios.get(
      "http://localhost:3900/api/categories/"
    );
    this.setState({ categories });
  }
}

export default Category;
