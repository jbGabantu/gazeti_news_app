import React, { Component } from "react";

class Searchbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="search flex flex-sm-fill">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-lg-2"
            type="search"
            placeholder="Search for articles"
          ></input>
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
