import React, { Component } from "react";

class Gift extends Component {
  render() {
    const { gift } = this.props;
    return (
      <div>
        <div className="styling">
          <div className="image">
            <img src={gift.image} />
            {/* <img src="https://m.media-amazon.com/images/I/81GGR4ZPZ0L._AC_UY327_FMwebp_QL65_.jpg" /> */}
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
