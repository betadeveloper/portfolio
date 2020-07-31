const iconItem = document.querySelector(".weather-icon");
const feelsLike = document.querySelector(".current .feels-like");
const tempItem = document.querySelector(".temp");
const locationItem = document.querySelector(".city");
const notificationItem = document.querySelector(".notification");
const searchbox = document.querySelector(".search-box");
const KELVIN = 273;
const apiKey = "918b5fc861eea26d7cefd77a6c694f17";

searchbox.addEventListener("keypress", setQuery);

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition);
} else {
  notificationItem.style.display = "block";
  notificationItem.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

// Retrieves Results

function getResults(query) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiKey}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults, displayWeather);
}

function displayResults(weather) {
  let city = document.querySelector(".data .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".data .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  feelsLike.innerHTML = `Feels like ${Math.round(
    weather.main.feels_like
  )}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;
  weather.iconId = weather.weather[0].icon;
  iconId = weather.weather[0].icon;
  iconItem.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}

// App data
const weather = {};
weather.temperature = {
  unit: "celsius",
};

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// Gets the data from API
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
      weather.feels_like = data.main.feels_like;
      weather.low = data.main.temp_min;
      weather.high = data.main.temp_max;
    })
    .then(function () {
      displayWeather();
    });
}

const descItem = document.querySelector(".weather");

function displayWeather() {
  iconItem.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempItem.innerHTML = `${weather.temperature.value}<span>°C</span>`;
  locationItem.innerHTML = `${weather.city}, ${weather.country}`;
  descItem.innerHTML = weather.description;
  let now = new Date();
  let date = document.querySelector(".data .date");
  date.innerText = dateBuilder(now);
  let hilow = document.querySelector(".hi-low");
  feelsLike.innerHTML = `Feels like ${Math.round(
    weather.feels_like - KELVIN
  )}<span>°c</span>`;
  hilow.innerText = `${Math.round(weather.high - KELVIN)}°c / ${Math.round(
    weather.low - KELVIN
  )}°c`;
}

tempItem.addEventListener("click", updateDegrees);

function updateDegrees() {
  if (tempItem.classList.contains("celsius")) {
    tempItem.innerHTML = `${
      (weather.temperature.value * 9) / 5 + 32
    }<span>°F</span>`;
    tempItem.classList.remove("celsius");
  } else {
    tempItem.innerHTML = `${weather.temperature.value}<span>°C</span>`;
    tempItem.classList.add("celsius");
  }
}
