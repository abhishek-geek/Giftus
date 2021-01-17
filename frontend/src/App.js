import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Category from "./components/category";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import Home from "./components/home";
import About from "./components/about";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/gifts/:category" component={Gifts}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/category" exact component={Category}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
