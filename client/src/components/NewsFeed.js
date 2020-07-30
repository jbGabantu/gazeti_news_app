import React, { Component } from "react";
import Article from "./Article";

class NewsFeed extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>News Feed</h2>
        <Article />
      </div>
    );
  }
}

export default NewsFeed;
