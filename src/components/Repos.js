import React, { Component } from "react";
import Repo from "./Repo";

const Repos = (props) => {
  return (
    <div>
      {props.repos &&
        props.repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
    </div>
  );
};
export default Repos;
