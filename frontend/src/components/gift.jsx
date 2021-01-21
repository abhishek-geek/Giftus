import React, { Component } from "react";

class Gift extends Component {
  render() {
    const { gift } = this.props;
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
        {/* <div>.</div> */}
      </div>
    );
  }
}

export default Gift;
