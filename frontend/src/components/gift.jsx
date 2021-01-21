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
            <img src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=B00HV3XI5I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=giftus-21" />
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
      </div>
    );
  }
}

export default Gift;
