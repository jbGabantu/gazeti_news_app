const config = require("../config/secrets.json");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(config.newsapi);
const fetch = require("node-fetch");
let currentLocation;

// Get country code of current country based on the IP Address
fetch(`${config.ipDataURL}?api-key=${config.ipDataAPIKey}`)
  .then((response) => response.json())
  .then((data) => {
    currentLocation = data.country_code;
    console.log(`Country code: ${currentLocation}`);
    return;
  })
  .catch((err) => {
    console.log("Location Fetch Error :-S", err);
  });

// Get top headlines of the current country
const topStories = (req, res) => {
  newsapi.v2
    .topHeadlines({
      country: `${currentLocation}`,
    })
    .then((response) => {
      res.json(response);
      // console.log("ARTICLES");
      // console.log(response);
    })
    .catch((err) => {
      console.log("Top Headlines Fetch Error :-S", err);
    });
};

module.exports = topStories;
