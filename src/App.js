import React from 'react';
import './App.css';

import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';


class App extends React.Component {



  render() {

    return (
        <div>
            <Titles />
            <Form />
            <Weather />
        </div>
    )
  }
}

export default App;

