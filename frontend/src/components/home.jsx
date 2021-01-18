import React from "react";
import { Link } from "react-router-dom";
import web from "../images/balloons.svg";
import Footer from "./footer";

const Home = () => {
  return (
    <section id="#header" className="home">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
            <h1>
              Choose best gifts for your loved ones with{" "}
              <strong className="bn">GiftUs..</strong>{" "}
            </h1>
            <div className="my-3">
              <Link to="/category">
                <button className="btn btn-primary get-started">
                  find gifts
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className="img-fluid animated" alt="homeimg" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
