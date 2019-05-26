import React, { Component } from 'react';
import Weather from './weather';

import axios from 'axios';


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
        }
    };

    getInputValue = (e) => this.setState({ [e.target.name]: e.target.value });

    fetchWeather = async e => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        let response = await axios.get(`${queryUrl}&q=${city},${country}`);
        console.log(city, country, response['data']);

        this.setState({
            weatherData: {
                city: response['data']['name'],
                country: response['data']['sys']['country'],
                currentTemp: response['data']['main']['temp'],
                minTemp: response['data']['main']['temp_min'],
                maxTemp: response['data']['main']['temp_max'],
                windSpeed: response['data']['wind']['speed'],
                description: response['data']['weather'][0]['description'],
            },
            city: '',
            country: ''
        });
    };

    render() {

        // const displayWeather =

        return (

            <React.Fragment>

                <form onSubmit={ this.fetchWeather }>
                    <input onChange={ this.getInputValue } value={ this.state.city } name="city" placeholder="City..." />
                    <input onChange={ this.getInputValue } value={ this.state.country } name="country" placeholder="Country..." />
                    <button type="submit">Get weather</button>
                </form>

                <Weather weatherData={this.state.weatherData} />

            </React.Fragment>

        )
    }

}



export default Form;


const queryUrl = `http://api.openweathermap.org/data/2.5/weather?appid=a52f93e46e59b1cecebd0c71a0024028&units=metric`;
