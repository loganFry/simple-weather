var React = require('react');
var WeatherForm = require('./WeatherForm')

class Home extends React.Component {
    render(){
        return (
            <div className='home-container'>
                <h1 className='header'>Enter a City and Country Abbreviation</h1>
                <WeatherForm direction='column' />
            </div>
        )
    }
}

module.exports = Home;