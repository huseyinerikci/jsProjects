const apiKey = "9e1ab0e2d81ce9b12935bb42315c3570";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");
const cities = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const res = await fetch(url + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    const data = await res.json();
    const status = data.weather[0].main;

    cities.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + " °C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (status == "Clouds") {
      weatherIcon.className = "fa-solid fa-cloud-rain";
    } else if (status == "Clear") {
      weatherIcon.className = "fa-solid fa-cloud-sun";
    } else if (status == "Rain") {
      weatherIcon.className = "fa-solid fa-cloud-rain";
    } else if (status == "Drizzle") {
      weatherIcon.className = "fa-solid fa-cloud-sun-rain";
    } else if (status == "Mist") {
      weatherIcon.className = "fa-solid fa-smog";
    }

    weather.style.display = "block";
    error.style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
