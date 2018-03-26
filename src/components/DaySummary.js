var React = require('react')
var PropTypes = require('prop-types')
var moment = require('moment')

class DaySummary extends React.Component {
  render(){
    return (
      <div className='card'>
        <h3>
          {moment(this.props.weatherDate).format('dddd, MMMM Do')}
        </h3>
        <img className='weather-icon' src={'/images/weather-icons/' + this.props.icon + '.svg'} alt='weather icon'/>
        <h2>{this.props.temp.toFixed(0)}</h2>
      </div>
    )
  }
}

DaySummary.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
}

module.exports = DaySummary