var React = require('react')
var PropTypes = require('prop-types')
var DayDetail = require('./DayDetail')
var DaySummary = require('./DaySummary')
require('../styles/flipper.css') //styles for flip animation

class WeatherCard extends React.Component {
  render(){
    return (
      <div className='card flip-container'>
        <div className='flipper'>
          <DaySummary
            weatherDate={this.props.weatherDate}
            icon={this.props.icon}
            low={this.props.low}
            high={this.props.high}
          />
          <DayDetail
            description={this.props.description}
            temp={this.props.temp}
            low={this.props.low}
            high={this.props.high}
            humidity={this.props.humidity}
          />
        </div>           
      </div>
    )
  }
}

WeatherCard.propTypes = {
  low: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  weatherDate: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
}

module.exports = WeatherCard