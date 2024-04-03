const apiKey = "6b06c8aa3e1a150ae689f4f09fc7826c"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather (city) {
const response = await fetch(apiURL + city + `&appid=${apiKey}`);

if (response.status == 404) {
document.querySelector(".error").style.display= "block";
document.querySelector(".weather").style.display= "none";

} else {

    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    document.querySelector(".weather").style.display= "block";
document.querySelector(".error").style.display= "none";

}

}
searchBtn.addEventListener("click", ()=> {

    CheckWeather(searchBox.value)
})