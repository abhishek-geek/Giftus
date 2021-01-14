import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Gifts}></Route>
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
