import React, { Component } from 'react';
import Weather from './weather';

import axios from 'axios';

const queryUrl = `http://api.openweathermap.org/data/2.5/weather?appid=a52f93e46e59b1cecebd0c71a0024028&units=metric`;

class Form extends Component {

    state = {
        city: '',
        country: '',
        weatherData: {
            currentTemp: null,
            minTemp: null,
            maxTemp: null,
            windSpeed: null,
            description: ''
        },
        error: ''
    };

    getInputValue = e => this.setState({ [e.target.name]: e.target.value });

    fetchWeather = async e => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;

        if (city && country) {
            let response = await axios.get(`${queryUrl}&q=${city},${country}`);
            console.log(city, country, response['data']);

            this.setState({
                weatherData: {
                    city: response['data']['name'],
                    country: response['data']['sys']['country'],
                    currentTemp: Math.round(response['data']['main']['temp']),
                    minTemp: Math.floor(response['data']['main']['temp_min']),
                    maxTemp: Math.ceil(response['data']['main']['temp_max']),
                    windSpeed: Math.round(response['data']['wind']['speed']),
                    description: response['data']['weather'][0]['description'],
                },
                city: '',
                country: '',
                error: ''
            });
        } else {
            this.setState({ error: 'Please input both city and country values!' });
        }

    };

    showErrorMessage = () => {
        return this.state.error ? (
            <p className="text-danger lead text-center">Please input both city and country values!</p>
        ) : (
            null
        )
    };

    render() {

        const displayWeather = () => {
            return this.state.weatherData.city ? (
              <Weather weatherData={ this.state.weatherData } />
          ) : (
              <p className="lead text-center text-primary">Input the city and country name above.</p>
          )
        };


        return (

            <React.Fragment>

                <form onSubmit={ this.fetchWeather }>
                    <input onChange={ this.getInputValue } value={ this.state.city } name="city" placeholder="City..." className="form-control mb-3" />
                    <input onChange={ this.getInputValue } value={ this.state.country } name="country" placeholder="Country..." className="form-control" />
                    <button type="submit" className="btn btn-primary btn-lg btn-block my-3">Get weather</button>
                </form>

                { this.showErrorMessage() }
                { displayWeather() }

            </React.Fragment>

        )
    }

}


export default Form;


