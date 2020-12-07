import React, { Component, useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState(props.keyword);

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = keyword;
    if (item) {
      props.searchUsers(item);
    } else {
      props.setAlert("Please, enter a keyword or username", "danger");
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
      {props.showClearResult && (
        <button
          className="btn btn-secondary btn-sm btn-block mt-2"
          onClick={() => {
            props.clearResult();
            setState({ keyword: "" });
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
