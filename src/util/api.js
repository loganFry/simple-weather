var axios = require('axios');

function Get5DayForecast(city, country){
    var apiKey = '811793717d22527c63d02e165dda39c5';
    var url = 'https://api.openweathermap.org/data/2.5/forecast';
    var encodedUrl = window.encodeURI(url + '?q=' + city + ',' + country + '&APPID=' + apiKey);

    return axios.get(encodedUrl)
        .then(function(response){
            console.log(response.data)
            return response.data;
        })
}

module.exports = {
    Get5DayForecast
}