import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {

    state = {
        city: '',
        country: ''
    };

    getInputValue = (e) => this.setState({ [e.target.name]: e.target.value });

    fetchWeather = async e => {
        e.preventDefault();
        let weatherData = await axios.get(queryUrl);
        console.log(weatherData);
    };

    render() {

        return (

            <form onSubmit={ this.fetchWeather }>
                <input onChange={ this.getInputValue } value={ this.state.city } name="city" placeholder="City..." />
                <input onChange={ this.getInputValue } value={ this.state.country } name="country" placeholder="Country..." />
                <button type="submit">Get weather</button>
            </form>
        )
    }

}



export default Form;


const queryUrl = `http://api.openweathermap.org/data/2.5/weather?appid=a52f93e46e59b1cecebd0c71a0024028&q=london,uk&units=metric`;
