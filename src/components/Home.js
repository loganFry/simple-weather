var React = require('react');
var WeatherForm = require('./WeatherForm')

class Home extends React.Component {
    render(){
        return (
            <div className='home-container'>
                <WeatherForm direction='column' />
            </div>
        )
    }
}

module.exports = Home;