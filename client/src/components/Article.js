import React, { Component } from "react";
import Moment from "react-moment";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: { articles: [] } };
  }

  callAPI() {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const calendarStrings = {
      lastDay: "[Yesterday at] LT",
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      lastWeek: "[last] dddd [at] LT",
      nextWeek: "dddd [at] LT",
      sameElse: "L",
    };
    return (
      <div>
        {this.state.apiResponse.articles.map((article) => (
          <div id="article-container" className="media">
            <img
              src={article.urlToImage}
              className="mr-3"
              width="64"
              height="64"
            />
            <div className="media-body">
              <h5 id="article-title" className="mt-0">
                <a href={article.url}>{article.title}</a>
              </h5>
              <p id="article-description">{article.description}</p>
              <div className="article-base">
                <p id="source-name">{article.source.name}</p>
                <time>
                  <Moment calendar={calendarStrings}>
                    {article.publishedAt}
                  </Moment>
                </time>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Article;
