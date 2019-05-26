import React, { Component } from 'react';

class Weather extends Component {

    // state = {
    //
    // };

    render() {

        return (
                <div>
                    <h4>Current weather for { this.props.weatherData.city }, { this.props.weatherData.country }</h4>
                    <p>Current temperature: { this.props.weatherData.currentTemp } &deg;C</p>
                    <p>Maximum temperature: { this.props.weatherData.maxTemp } &deg;C</p>
                    <p>Minimum temperature: { this.props.weatherData.minTemp } &deg;C</p>
                    <p>Wind speed: { this.props.weatherData.windSpeed } km/h</p>
                    <p>Description: { this.props.weatherData.description }</p>

                </div>
        )
    }


}


export default Weather;