import React, { Component, useContext } from "react";
import User from "./User";
import Loading from "./Loading";
import GithubFinderContext from '../context/githubContext';

const Users = () => {
  const {users, loading} = useContext(GithubFinderContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3">
      <div className="row">
        {users.map((user, index) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
