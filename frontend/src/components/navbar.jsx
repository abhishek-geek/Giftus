import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    isLogin: "",
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg text-white fixed-top">
        <Link className="navbar-brand" to="/">
          GiftUs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-white">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Connect
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto text-white ">
            {!this.state.isLogin && (
              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/register-user"
                >
                  Signup
                </NavLink>
              </li>
            )}
            <li className="nav-item mr-2">
              <NavLink
                className="nav-link btn btn-info btn-outline-success btn-sm"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token.length > 0) {
      this.setState({ isLogin: "true" });
    }
    this.setState({ isLogin: "" });
    console.log(this.state.isLogin);
  }
}

export default Navbar;
