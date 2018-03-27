var React = require('react');
var QueryString = require('query-string');
var api = require('../util/api');
var DaySummary = require('./DaySummary');

class ExtendedForecast extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            weather: null,
        }
    }

    componentDidMount(){
        var params = QueryString.parse(this.props.location.search);
        var city = params.city;
        var country = params.country;
        api.GetFormattedWeatherData(city, country)
            .then(function(data){
                console.log(data);
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
                                    <DaySummary 
                                    key={day.date} 
                                    low={day.minTemp}
                                    high={day.maxTemp}
                                    icon={day.icon}
                                    weatherDate={day.date} />
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