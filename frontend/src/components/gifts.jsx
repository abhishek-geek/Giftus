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
 
       {/* <iframe
          style={{
            width: "124px",
            height: "243px",
            marginwidth: "0",
            marginheight: "0",
            scrolling: "no",
            frameborder: "0",
          }}
          src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=giftus-21&marketplace=amazon&amp;region=IN&placement=B07X2Y3Y4J&asins=B07X2Y3Y4J&linkId=f9963c0ea0f782d2867fd755db65a142&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=008080&bg_color=fffcfc"
        ></iframe>  */}
        <div className="row">
          <div className="col-4">

        {gifts.map((gift) => (
          <div key={gift._id}>
            <Gift gift={gift} />
          </div>
        ))}
          </div>
          <div className="col-4">

        {gifts.map((gift) => (
          <div key={gift._id}>
            <Gift gift={gift} />
          </div>
        ))}
          </div>
          <div className="col-4">

        {gifts.map((gift) => (
          <div key={gift._id}>
            <Gift gift={gift} />
          </div>
        ))}
          </div>

        <div className="row ml-2">
          {gifts.map((gift) => (
            <div key={gift._id} className="col mb-4">
              <Gift gift={gift} />
            </div>
          ))}
        </div>
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
