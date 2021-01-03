import React, { useReducer } from "react";
import githubFinderReducer from "./githubReducer";
import GithubFinderContext from "./githubContext";
import axios from "axios";

const githubFinderState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubFinderReducer, initialState);

  const searchUsers = (keyword) => {
    setLoading();
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => {
        dispatch({ type: "SEARCH_USERS", payload: res.data.items });
      });
  };

  const getUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      dispatch({type: "SEARCH_USER", payload: res.data});
    });
  };

  const getUserRepos = (username) => {
    setLoading();
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
     dispatch({type: "REPOS", payload: res.data});
    });
  };

  const clearResult = () => {
    dispatch({type: "CLEAR_RESULTS"});
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubFinderContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearResult,
        setLoading
      }}
    >
      {props.children}
    </GithubFinderContext.Provider>
  );
};

export default githubFinderState;
