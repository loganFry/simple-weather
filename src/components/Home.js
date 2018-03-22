var React = require('react');
var WeatherForm = require('./WeatherForm')

class Home extends React.Component {
    render(){
        return (
            <div>
                <WeatherForm styleClass='vertical-weather' />
            </div>
        )
    }
}

module.exports = Home;