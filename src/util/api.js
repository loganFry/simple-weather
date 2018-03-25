var axios = require('axios');

function Get5DayForecast(city, country){
    var apiKey = '811793717d22527c63d02e165dda39c5';
    var url = 'https://api.openweathermap.org/data/2.5/forecast';
    var encodedUrl = window.encodeURI(url + '?q=' + city + ',' + country + 
        '&APPID=' + apiKey + '&units=imperial');

    return axios.get(encodedUrl)
        .then(function(response){
            console.log(response.data)
            return response.data;
        })
}

function FlattenDailyData(weatherData){
    var dailyData = [];
    var hourlyPoints = weatherData.list;
    var currentDate = new Date(2018, 3, 1);
    var dayData;

    hourlyPoints.forEach(function(hourlyPoint){        
        var pointDate = new Date(parseInt(hourlyPoint.dt, 10));
        if(!CheckDatesMatch(currentDate, pointDate)){
            currentDate = pointDate;
            if(dayData){
                dailyData.push(dayData);
            }
            dayData = {
                temps: [],
                minTemps: [],
                maxTemps: [],
                humidities: [],
                mains: [],
                descriptions: [],
                icons: [],
                date: currentDate,
            };
        }

        var weatherMain = hourlyPoint.main;
        dayData.temps.push(weatherMain.temp);
        dayData.minTemps.push(weatherMain.temp_min);
        dayData.maxTemps.push(weatherMain.temp_max);
        dayData.humidities.push(weatherMain.humidity);

        var weatherInfo = hourlyPoint.weather[0];
        dayData.mains.push(weatherInfo.main);
        dayData.descriptions.push(weatherInfo.description);
        dayData.icons.push(weatherInfo.icon);
    })

    return dailyData;
}

function CheckDatesMatch(date1, date2){
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate()
}

function GetCity(weatherData){
    return weatherData.city.name;
}

function GetCountry(weatherData){
    return weatherData.city.country;
}

module.exports = {
    Get5DayForecast
}