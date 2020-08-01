import React, { Component } from "react";
import Article from "./Article";

class NewsFeed extends Component {
  state = {};
  render() {
    return (
      <div className="articles-container">
        <h2 id="top-stories">Top Stories</h2>
        <Article />
      </div>
    );
  }
}

export default NewsFeed;
