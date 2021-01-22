import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    email: "abhishek@giftus",
    password: "12345",
  };

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={(input) => {
                this.setState({ email: input.target.value });
              }}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(input) => {
                this.setState({ password: input.target.value });
              }}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            onClick={(e) => this.handleSubmit(e)}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    const res = await axios.post("http://localhost:3900/api/users/", userData);
    console.log(res.headers["x-auth-token"]);
  };
}

export default Login;
