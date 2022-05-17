// Might not be needed
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import Login from "./Login";
import Home from "../pages/Home";
import App from "./App";

function Routes() {
  return (
    <Router>
      <Route exact path="/">
        <App />
      </Route>
    </Router>
  );
}

export default Router;
