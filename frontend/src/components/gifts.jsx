import React, { Component } from "react";
import Gift from "./gift";
import axios from "axios";

class Gifts extends Component {
  state = {
    gifts: [],
    categories: [],
  };
  render() {
    // const category = this.props.match.params.category;

    const categoryId = this.props.match.params.category;
    const { gifts } = this.state;
    const categoryName = this.getCategoryName(categoryId);
    return (
      <div className="container-fluid">
        <h1>Your Gifts from {categoryName} category here --:</h1>
        <div className="row ml-2">
          {gifts.map((gift) => (
            <div key={gift._id} className="col">
              <Gift gift={gift} />
            </div>
          ))}
        </div>
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
    const { data: gifts } = await axios.get("http://localhost:3900/api/gifts/");
    this.setState({ gifts: gifts });
    const { data: categories } = await axios.get(
      "http://localhost:3900/api/categories/"
    );
    this.setState({ categories });
    const categoryId = this.props.match.params.category;
    this.filterGifts(categoryId);
  }
}

export default Gifts;
