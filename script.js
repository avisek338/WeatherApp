
var submitButton = document.getElementById('submit-button');
var cityInput = document.getElementById('city-input');
var temp = document.getElementsByClassName('temp')[0];
var Maxtemp = document.getElementsByClassName('Max-temp')[0];
var Mintemp = document.getElementsByClassName('Min-temp')[0];
var descrip = document.getElementsByClassName('description')[0];
var feel = document.getElementsByClassName('feel')[0];
var wind = document.getElementsByClassName('wind')[0];
var cityname = document.getElementsByClassName('cityname')[0];
var city = 'Delhi' ;
getWeather(city);
submitButton.addEventListener('click', function() {
  city = cityInput.value;
  getWeather(city);
});

function getWeather(city) {
  var apiKey = '55c95416d417e7112ef8f9fe5bcde2b6'; 
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      temp.innerHTML = "Temperature : "+ Math.round(data.main.temp - 273.15) +" °C";
     console.log(data); 
      Maxtemp.innerHTML = "Maximum : "+ Math.round(data.main.temp_max - 273.15)+" °C";
      Mintemp.innerHTML = "Minimum : "+Math.round(data.main.temp_min - 273.15) +" °C" ;
      feel.innerHTML = "Feels like :" + Math.round(data.main.feels_like - 273.15) +" °C" ;
      descrip.innerHTML = data.weather[0].description ;
      wind.innerHTML = "Wind speed : " + data.wind.speed +" mph";
      cityname.innerHTML = city;
    })
    .catch(function(error) {
      cityname.innerHTML = 'error in loading for this city ';
      console.log('Error fetching weather data:', error);
    });
}

