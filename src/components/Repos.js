import React, { Component, useContext } from "react";
import Repo from "./Repo";
import GithubFinderContext from "../context/githubContext";

const Repos = () => {
  const {repos} = useContext(GithubFinderContext);
  return (
    <div>
      {repos &&
        repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
    </div>
  );
};
export default Repos;
