var axios = require('axios');
var apiKey = '811793717d22527c63d02e165dda39c5';
var baseUrl = 'api.openweathermap.org/data/2.5/forecast'

function Get5DayForecast(city, country){
    axios.get(baseUrl + '?q=' + city + ',' + country + '&APPID=' + apiKey)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
}

module.exports = {
    Get5DayForecast
}