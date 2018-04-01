var React = require('react')
var PropTypes = require('prop-types')
var TempSummary = require('./TempSummary')
var moment = require('moment')

function DaySummary(props){
    return (
        <div className='front'>
            <h4>
              {moment(props.weatherDate).format('dddd, MMM Do')}
            </h4>
            <img className='weather-icon' src={'/images/weather-icons/' + props.icon + '.svg'} alt='weather icon'/>
            <TempSummary low={props.low} high={props.high} />
        </div>
    )
}

DaySummary.propTypes = {
    weatherDate: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    low: PropTypes.number.isRequired,
    high: PropTypes.number.isRequired,
}

module.exports = DaySummary