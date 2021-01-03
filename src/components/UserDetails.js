import React, { Component, useEffect, useContext } from "react";
import GithubFinderContext from "../context/githubContext";
import Repos from "./Repos";

const UserDetails = (props) => {

  const {repos, user, getUser, getUserRepos, loading} = useContext(GithubFinderContext);

  useEffect(() => {
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
  }, []);

  const {
    avatar_url,
    name,
    location,
    html_url,
    bio,
    blog,
    followers,
    following,
    public_repos,
  } = user;
  if (!loading) {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={avatar_url} alt="" className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{name}</p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {location}
                </p>
                <p>
                  <a
                    href={html_url}
                    className="btn btn-block btn-primary btn-sm"
                  >
                    Github Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h3>About</h3>
                <p>{bio}</p>
                <h3>Blog</h3>
                <p>
                  <a href={blog}>{blog}</a>
                </p>
                <div>
                  <span className="badge badge-primary m-1">
                    Followers: {followers}
                  </span>
                  <span className="badge badge-danger m-1">
                    Following: {following}
                  </span>
                  <span className="badge badge-success m-1">
                    Repos: {public_repos}
                  </span>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <Repos repos={repos} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default UserDetails;
