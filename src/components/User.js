import React, { Component } from "react";

class User extends Component {
  render() {
      const {avatar_url, html_url} = this.props.user;
    return (
      <div className="col-md-3 col-sm-6 col-lg-3">
        <div className="card mt-2">
          <img src={avatar_url} alt="" className="img-fluid" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <a href={html_url} className="btn btn-primary">Go to Github Profile</a>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
