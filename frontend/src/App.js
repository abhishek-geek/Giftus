import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import auth from "./services/auth";
import Category from "./components/category";
import Gifts from "./components/gifts";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Home from "./components/home";
import About from "./components/about";
import RegisterUser from "./components/registerUser";
import Login from "./components/login";
import Logout from "./components/logout";

class App extends Component {
  state = {
    user: auth.getCurrentUser(),
  };

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Navbar isLogin={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/gifts/:category" component={Gifts}></Route>
            <Route path="/register-user" component={RegisterUser}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/category" exact component={Category}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
