import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    user: this.props.isLogin,
  };
  render() {
    const { user } = this.state;
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
          {!user && (
            <ul className="navbar-nav ml-auto text-white ">
              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/register-user"
                >
                  Signup
                </NavLink>
              </li>

              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          )}
          {user && (
            <ul className="navbar-nav ml-auto text-white">
              <li className="nav-item mr-2">{this.props.isLogin.name}</li>
              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
