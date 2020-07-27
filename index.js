const express = require("express");
const app = express();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("8911dffc4b1540f19bb8b0d4053a0637");

//PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Homepage Route
app.get("/", (req, res) => {
  newsapi.v2
    .topHeadlines({
      language: "en",
      country: "us",
    })
    .then((response) => {
      res.render("index", { title: "Home", articles: response["articles"] });
      console.log(response);
    });
});
