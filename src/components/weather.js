import React, { Component } from 'react';

class Weather extends Component {

    render() {

        return (
            <div className="row m-auto">
                <div className="col-md-6 m-auto">

                    <h4 className="text-center">Current weather for { this.props.weatherData.city }, { this.props.weatherData.country }</h4>

                    <div className="weather-grid">
                        <p><span>Current temperature:</span> <span style={{ float: 'right' }}>{ this.props.weatherData.currentTemp } &deg;C</span></p>
                        <p><span>Maximum temperature:</span> <span style={{ float: 'right' }}>{ this.props.weatherData.maxTemp } &deg;C</span></p>
                        <p><span>Minimum temperature:</span> <span style={{ float: 'right' }}>{ this.props.weatherData.minTemp } &deg;C</span></p>
                        <p><span>Wind speed:</span> <span style={{ float: 'right' }}>{ this.props.weatherData.windSpeed } km/h</span></p>
                        <p><span>Description:</span> <span style={{ float: 'right' }}>{ this.props.weatherData.description }</span></p>

                    </div>

                </div>


            </div>

        )
    }

}


export default Weather;