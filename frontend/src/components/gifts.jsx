import React, { Component } from "react";
import Gift from "./gift";
import axios from "axios";

class Gifts extends Component {
  state = {
    gifts: [],
    categories: [],
  };
  render() {
    const categoryId = this.props.match.params.category;
    const { gifts } = this.state;
    const categoryName = this.getCategoryName(categoryId);
    return (
      <div>
        <h1>Your Gifts from {categoryName} category here --:</h1>
        {/* {gifts.map((gift) => {
          console.log(gift.category);
          console.log(gift.category.indexOf(categoryName));
          if (gift.category.indexOf(categoryName) >= 0) {
            console.log("returning...");
            return (
              <div key={gift._id}>
                <Gift gift={gift} />
              </div>
            );
          }
        })} */}
        {gifts.map((gift) => (
          <div key={gift._id}>
            <Gift gift={gift} />
          </div>
        ))}
      </div>
    );
  }
  filterGifts(categoryId) {
    const { gifts } = this.state;
    const categoryName = this.getCategoryName(categoryId);
    let filteredGifts = [];
    gifts.map((gift) => {
      if (gift.category.indexOf(categoryName) >= 0) {
        filteredGifts.push(gift);
      }
    });
    this.setState({ gifts: filteredGifts });
  }
  getCategoryName(id) {
    const { categories } = this.state;
    for (let c in categories) {
      if (categories[c]._id === id) {
        return categories[c].name;
      }
    }
  }
  async componentDidMount() {
    const { data: gifts } = await axios.get("http://localhost:3000/api/gifts/");
    this.setState({ gifts: gifts });
    const { data: categories } = await axios.get(
      "http://localhost:3000/api/categories/"
    );
    this.setState({ categories });
    const categoryId = this.props.match.params.category;
    this.filterGifts(categoryId);
  }
}

export default Gifts;
