import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Category from "./components/category";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/gifts/:category" component={Gifts}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Category}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
