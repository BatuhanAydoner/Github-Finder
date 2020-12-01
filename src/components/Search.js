import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }

  onChange(keyword) {
    this.setState({
      keyword: keyword.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let item = this.state.keyword;
    if (item) {
      this.props.searchUsers(item);
    } else {
      this.props.setAlert("Please, enter a keyword or username", "danger");
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mt-3">
            <input
              type="text"
              onChange={this.onChange}
              className="form-control"
              value={this.state.keyword}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </form>
        {this.props.showClearResult && (
          <button
            className="btn btn-secondary btn-sm btn-block mt-2"
            onClick={() => {
              this.props.clearResult();
              this.setState({keyword: ""});
            }}
          >
            Clear Results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
