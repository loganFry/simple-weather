var React = require('react')
var PropTypes = require('prop-types')

function DayDetail(props){
    return (
        <div className='back'>
            <h2>{props.description}</h2>
            <h2>average: {props.temp.toFixed(0)}&#8457;</h2>
            <h2>low: {props.low.toFixed(0)}&#8457;</h2>
            <h2>high: {props.high.toFixed(0)}&#8457;</h2>
            <h2>humidity: {props.humidity.toFixed(0)}%</h2>                        
        </div>   
    )
}

DayDetail.propTypes = {
    description: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    low: PropTypes.number.isRequired,
    high: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
}

module.exports = DayDetail