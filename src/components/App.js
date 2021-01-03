import axios from "axios";
import React, { Component, useState } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchUsers = (keyword) => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        setUsers(res.data.items);
        setAlert(false);
      });
  };

  const getUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      setUser(res.data);
    });
  };

  const getUserRepos = (username) => {
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      setRepos(res.data);
      setLoading(false);
    });
  };

  const clearResult = () => {
    setUsers([]);
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <BrowserRouter>
      <Navbar title="Github Finder" icon="fab fa-github" />
      <Alert alert={alert} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Search
                searchUsers={searchUsers}
                showClearResult={users.length > 0 ? true : false}
                clearResult={clearResult}
                setAlert={showAlert}
                loading={loading}
              />
              <Users users={users} />
            </>
          )}
        />
        <Route
          path="/user/:login"
          render={(props) => {
            return (
              <UserDetails
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
