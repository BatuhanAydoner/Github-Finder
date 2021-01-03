import React, { Component, useState, useContext } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";
import GithubFinderState from "../context/githubState";
import AlertState from "../context/alert/alertState";

const App = () => {
  return (
    <GithubFinderState>
      <AlertState>
        <BrowserRouter>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user/:login" component={UserDetails} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubFinderState>
  );
};

export default App;
