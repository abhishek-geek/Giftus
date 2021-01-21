import React, { Component } from "react";
import axios from "axios";

class RegisterUser extends Component {
  state = {
    data: { name: "",  email: "",password: "" },
  };

  render() {
    return (
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={(input) => {
                this.setState({ name: input });
              }}
              type="name"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={(input) => {
                this.setState({ email: input });
              }}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-info"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = async () => {
    // const userData = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    const { data:data } = await axios.get(
      "http://localhost:3900/api/categories/"
    );
    this.setState({ data });
      console.log("Somya");

    // const { name, email, password } = this.state;
    // console.log(name, email, password);
    // const data = await axios.post("http://localhost:3900/api/users/", {
    //   name: name,
    //   email: email,
    //   password: password,
    // });
    // console.log("User data : ", data.data);
    // this.setState({ name, email, password });
  };
}

export default RegisterUser;
