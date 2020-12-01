import axios from "axios";
import React, { Component } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import Search from "./Search";
import Users from "./Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearResult = this.clearResult.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      users: [],
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
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          showClearResult={this.state.users.length > 0 ? true : false}
          clearResult={this.clearResult}
          setAlert={this.setAlert}
        />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
