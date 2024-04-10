// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import MapPage from "./components/MapPage";
import Details from "./components/Details";
import Movies from "./components/Movies";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/map">
          {isAuthenticated ? <MapPage /> : <Login />}
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          {isAuthenticated ? <MapPage /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;