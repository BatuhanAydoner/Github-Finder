import axios from "axios";
import React, { Component } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./UserDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.clearResult = this.clearResult.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      users: [],
      user: {},
      alert: null,
    };
  }

  searchUsers(keyword) {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        this.setState({
          users: res.data.items,
        });
      });
  }

  getUser(username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => {
            this.setState({user: res.data});
        })
  }

  clearResult() {
    this.setState({ users: [] });
  }

  setAlert(msg, type) {
    this.setState({
      alert: {
        msg,
        type,
      },
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={this.state.alert} />
        <Switch>
          <Route exact
            path="/"
            render={(props) => (
              <>
                <Search
                  searchUsers={this.searchUsers}
                  showClearResult={this.state.users.length > 0 ? true : false}
                  clearResult={this.clearResult}
                  setAlert={this.setAlert}
                />
                <Users users={this.state.users} />
              </>
            )}
          />
          <Route path="/user/:login" render={props => (<UserDetails {...props} getUser={this.getUser} user={this.state.user} />)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
