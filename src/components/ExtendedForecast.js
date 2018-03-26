var React = require('react');
var QueryString = require('query-string');
var api = require('../util/api');

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
                    <div className='home-container'>
                        <h2 className='header'>
                            Weather for {this.state.weather.city}, {this.state.weather.country}
                        </h2>
                        {this.state.weather.days.map(day => <p key={day.date}>temp: {day.temp}</p>)}
                    </div>
                    : <p>Loading</p>}
            </div>
        )
    }
}

module.exports = ExtendedForecast;