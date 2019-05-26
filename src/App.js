import React from 'react';
import './App.css';

import Titles from './components/titles';
import Form from './components/form';


class App extends React.Component {

  render() {

    return (
        <div>
            <Titles />
            <Form />
        </div>
    )
  }
}

export default App;

