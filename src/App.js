import React from 'react';
import './App.css';

import Titles from './components/titles';
import Form from './components/form';


class App extends React.Component {

  render() {

    return (
        <div className="container-fluid mt-3">
            <div className="row m-auto">
                <div className="col-md-6 m-auto">

                    <Titles />
                    <Form />

                </div>
            </div>
        </div>
    )
  }
}

export default App;

