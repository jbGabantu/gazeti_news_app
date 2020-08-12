const config = require("../config/secrets.json");
const fetch = require("node-fetch");
let currentCity;
let currentTemp;

// Get current city based on the IP Address
const getWeather = fetch(`${config.ipDataURL}?api-key=${config.ipDataAPIKey}`)
  .then((response) => response.json())
  .then((data) => {
    currentCity = data.city;
    console.log(currentCity);
    // Get current weather of the current city
    return fetch(
      `${config.openWeatherURL}?q=${currentCity}&appid=${config.openWeatherAPIKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        currentTemp = data.main.temp;
        console.log(currentTemp);
      });
  })
  .catch((err) => {
    console.log("Fetch Error :-S", err);
  });

module.exports = getWeather;
