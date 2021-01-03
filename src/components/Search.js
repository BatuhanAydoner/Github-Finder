import React, { Component, useState, useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import GithubFinderContext from "../context/githubContext";

const Search = (props) => {
  const [keyword, setKeyword] = useState(props.keyword);

  const {searchUsers, clearResult, users} = useContext(GithubFinderContext);
  const {setupAlert} = useContext(AlertContext);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = keyword;
    if (item) {
      searchUsers(item);
    } else {
      setupAlert("Please, enter a keyword or username", "danger");
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mt-3">
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            value={keyword}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-secondary btn-sm btn-block mt-2"
          onClick={() => {
            clearResult();
            setKeyword('');
          }}
        >
          Clear Results
        </button>
      )}
    </div>
  );
};

Search.defaultProps = {
  keyword: "",
};

export default Search;
