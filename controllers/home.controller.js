const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("8911dffc4b1540f19bb8b0d4053a0637");
const fetch = require("node-fetch");
const ipDataURL = `https://api.ipdata.co`;
const ipData_API_Key = `a07401f7ab4c8df0d5b1b1220a4ea2592ba703d51107216777bd5e40`;
let currentLocation;

//Get country code of current country based on the IP Address
fetch(`${ipDataURL}?api-key=${ipData_API_Key}`)
  .then((response) => response.json())
  .then((data) => {
    currentLocation = data.country_code;
    console.log(currentLocation);
    return;
  })
  .catch((err) => {
    console.log("Location Fetch Error :-S", err);
  });

//Get top headlines of the current country
const topStories = (req, res) => {
  newsapi.v2
    .topHeadlines({
      country: `${currentLocation}`,
    })
    .then((response) => {
      res.json(response);
      console.log("ARTICLES");
      console.log(response);
    })
    .catch((err) => {
      console.log("Top Headlines Fetch Error :-S", err);
    });
};

module.exports = topStories;
