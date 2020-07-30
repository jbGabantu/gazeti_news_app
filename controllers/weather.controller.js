const fetch = require("node-fetch");
const ipDataURL = `https://api.ipdata.co`;
const ipData_API_Key = `a07401f7ab4c8df0d5b1b1220a4ea2592ba703d51107216777bd5e40`;
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather`;
const openWeather_API_Key = `c1f67dd872e861a122c7125cb9570728`;
let currentCity;
let currentTemp;

//Get current city based on the IP Address
const getWeather = fetch(`${ipDataURL}?api-key=${ipData_API_Key}`)
  .then((response) => response.json())
  .then((data) => {
    currentCity = data.city;
    console.log(currentCity);
    //Get current weather of the current city
    return fetch(
      `${openWeatherURL}?q=${currentCity}&appid=${openWeather_API_Key}`
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
