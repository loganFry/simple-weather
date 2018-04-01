var React = require('react');
var QueryString = require('query-string');
var api = require('../util/api');
var WeatherCard = require('./WeatherCard');

class ExtendedForecast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            weather: null,
        }

        this.getWeatherData = this.getWeatherData.bind(this);
    }

    componentDidMount(){
        this.getWeatherData(this.props.location.search)
    }

    componentWillReceiveProps(nextProps){
        this.getWeatherData(nextProps.location.search)
    }

    getWeatherData(query){
        var params = QueryString.parse(query);
        var city = params.city;
        var country = params.country;
        api.GetFormattedWeatherData(city, country)
            .then(function(data){
                return this.setState({
                    weather: data,
                })
            }.bind(this))
    }

    render() {
        return (
            <div className='container'>
                {this.state.weather ? 
                    (<div className='home-container'>
                        <h2 className='header'>
                            Weather for {this.state.weather.city}, {this.state.weather.country}
                        </h2>
                        <div className='card-container'>
                            {this.state.weather.days.map(function(day){
                                return (
                                    <WeatherCard 
                                        key={day.date} 
                                        low={day.minTemp}
                                        high={day.maxTemp}
                                        temp={day.temp}
                                        icon={day.icon}
                                        weatherDate={day.date}
                                        description={day.description}
                                        humidity={day.humidity} 
                                    />
                                )
                            })}
                        </div>
                    </div>)
                    : <p>Loading</p>}
            </div>
        )
    }
}

module.exports = ExtendedForecast;