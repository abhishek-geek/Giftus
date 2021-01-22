import React, { Component } from "react";

class Gift extends Component {
  render() {
    const { gift } = this.props;
    // {
    //   console.log("Category : ", gift.category);
    // <a target="_blank" href="https://www.amazon.in/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=giftus-21&keywords=B00HV3XI5I&index=aps&camp=3638&creative=24630&linkCode=ur2&linkId=2b2b89f53a8c93d7bb999ebfbc13b8cb">
    //   B00HV3XI5I</a><img src="//ir-in.amazon-adsystem.com/e/ir?t=giftus-21&l=ur2&o=31&camp=3638" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    // }
    return (
      <div>
        <div className="styling">
          <div className="image">
            <img src="https://m.media-amazon.com/images/I/81GGR4ZPZ0L._AC_UY327_FMwebp_QL65_.jpg" />
          </div>
          <div className="text">
          <h4>{gift.name}</h4>
          <p>Price : {gift.price}</p>
          <div className="buy">
          <p>
            <a href={gift.link} target="_blank">
              BUY NOW
            </a>
          </p>
          </div>
        </div>

          </div>
          <div>.</div>
        {/* <iframe
          style={{
            width: "124px",
            height: "243px",
            marginwidth: "0",
            marginheight: "0",
            scrolling: "no",
            frameborder: "0",
          }}<a target="_blank"  href="https://www.amazon.in/gp/search/ref=as_li_qf_sp_sr_il?ie=UTF8&tag=giftus-21&keywords=B00HV3XI5I&index=aps&camp=3638&creative=24630&linkCode=ur2&linkId=6def96d47b77926ffb4ee5bb2b4ef309"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B00HV3XI5I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=giftus-21" ></a><img src="//ir-in.amazon-adsystem.com/e/ir?t=giftus-21&l=ur2&o=31&camp=3638" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
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
