import React, { Component } from "react";
import User from "./User";
import Loading from "./Loading";

const Users = (props) => {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3">
      <div className="row">
        {props.users.map((user, index) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
