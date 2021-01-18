import React from "react";
import { Link } from "react-router-dom";
import web from "../images/man.svg";
import Footer from "./footer";

const About = () => {
  return (
    <section id="#header" className="home">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
            <h1>
              We are a community of developers here to help you{" "}
              <strong className="bn">find gifts for your loved ones..</strong>{" "}
            </h1>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className="img-fluid animated" alt="homeimg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
