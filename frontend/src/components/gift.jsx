import React, { Component } from "react";

class Gift extends Component {
  render() {
    const { gift } = this.props;
    // {
    //   console.log("Category : ", gift.category);
    // }
    return (
      <div>
        <div style={{ border: "10px solid lightblue", margin: "10px" }}>
          <h4>{gift.name}</h4>
          <p>Price : {gift.price}</p>
          <p>
            Buying link :{" "}
            <a href={gift.link} target="_blank">
              at just rs {gift.price}
            </a>
          </p>
        </div>
        <div>{gift.link}</div>
        {/* <iframe
          style={{
            width: "124px",
            height: "243px",
            marginwidth: "0",
            marginheight: "0",
            scrolling: "no",
            frameborder: "0",
          }}
          src={gift.link}
        ></iframe> */}
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
        ></iframe> */}
      </div>
    );
  }
}

export default Gift;
