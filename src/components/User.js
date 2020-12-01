import React, { Component } from "react";
import {Link} from 'react-router-dom';

class User extends Component {
  render() {
      const {avatar_url, html_url, login} = this.props.user;
    return (
      <div className="col-md-3 col-sm-6 col-lg-3">
        <div className="card mt-2">
          <img src={avatar_url} alt="" className="img-fluid" />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <Link to={`/user/${login}`} className="btn btn-primary btn-block">Go to Profile</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
