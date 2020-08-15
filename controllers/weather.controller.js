const fetch = require("node-fetch");
let currentCity;
let currentTemp;

// Get current city based on the IP Address
const getWeather = fetch(
  `${process.env.IP_DATA_URL}?api-key=${process.env.IP_DATA_API}`
)
  .then((response) => response.json())
  .then((data) => {
    currentCity = data.city;
    console.log(`City: ${currentCity}`);
    // Get current weather of the current city
    return fetch(
      `${process.env.WEATHER_URL}?q=${currentCity}&appid=${process.env.WEATHER_API}`
    )
      .then((response) => response.json())
      .then((data) => {
        currentTemp = data.main.temp;
        console.log(currentTemp);
      })
      .catch((err) => {
        console.log("Weather Fetch Error :-S", err);
      });
  })
  .catch((err) => {
    console.log("City Fetch Error :-S", err);
  });

module.exports = getWeather;
