/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../HomePage";
import { Navbar } from "../Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
};
