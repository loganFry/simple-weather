var axios = require('axios');

function GetFormattedWeatherData(city, country){
    return Get5DayForecast(city, country).then(function(apiData){
        var flattenedData = FlattenDailyData(apiData);
        var daySummaries = CalculateSummaryData(flattenedData);
        var city = GetCity(apiData);
        var country = GetCountry(apiData);

        return {
            days: daySummaries,
            city: city,
            country: country,
        }
    })    
}

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

    // array of objects representing one hour of weather data
    var hourlyPoints = weatherData.list;
    var currentDate = new Date(2017, 3, 1);
    var dayData = null;

    // iterate over hourly weather data
    hourlyPoints.forEach(function(hourlyPoint){        
        // parse the exact datetime from the current datapoint
        var pointDate = new Date(hourlyPoint.dt_txt);

        // if the datetime does not have the same date as the previous,
        // save the previous date's data and start a new date
        if(!CheckDatesMatch(currentDate, pointDate)){
            currentDate = pointDate;

            // if the previous date had data, save it to our array to return
            if(dayData !== null){
                dailyData.push(dayData);
            }

            // create a new object to contain data for the new date
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

        // process the date in the main property of the object
        var weatherMain = hourlyPoint.main;
        dayData.temps.push(weatherMain.temp);
        dayData.minTemps.push(weatherMain.temp_min);
        dayData.maxTemps.push(weatherMain.temp_max);
        dayData.humidities.push(weatherMain.humidity);

        // process the data in the weather property of the object
        var weatherInfo = hourlyPoint.weather[0];
        dayData.mains.push(weatherInfo.main);
        dayData.descriptions.push(weatherInfo.description);
        dayData.icons.push(weatherInfo.icon);
    })

    // return our constructed array of data grouped by day instead of hour
    return dailyData;
}

function CalculateSummaryData(flattenedData){
    var dailySummaries = [];

    flattenedData.forEach(function(dayData){
        var daySummary = {
            temp: Avg(dayData.temps),
            minTemp: Min(dayData.minTemps),
            maxTemp: Max(dayData.maxTemps),
            humidity: Avg(dayData.humidities),
            main: MiddleValue(dayData.mains),
            description: MiddleValue(dayData.descriptions),
            icon: MiddleValue(dayData.icons),
            date: dayData.date,
        };

        dailySummaries.push(daySummary);
    });

    return dailySummaries;
}

function Avg(arr){
    return arr.reduce(function(sum, current){
        return sum += current;
    }, 0) / arr.length;
}

function Min(arr){
    return arr.reduce(function(prevMin, current){
        return Math.min(prevMin, current);
    }, Number.MAX_VALUE);
}

function Max(arr){
    return arr.reduce(function(prevMax, current){
        return Math.max(prevMax, current);
    }, Number.MIN_VALUE);
}

function MiddleValue(arr){
    if(arr.length <= 1){
        return arr[0];
    } else {
        var middleIndex = Math.floor(arr.length / 2);
        return arr[middleIndex];
    }
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
    GetFormattedWeatherData
}