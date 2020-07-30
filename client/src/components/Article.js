import React, { Component } from "react";

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
    return (
      <div>
        {this.state.apiResponse.articles.map((article) => (
          <ul>
            <li>{article.source.name}</li>
            <li>
              <a href={article.url}>{article.title}</a>
            </li>
            <li>{article.publishedAt}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Article;
