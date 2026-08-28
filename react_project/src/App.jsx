
import React, { Component } from 'react';
import Welcome from './components/welcome.jsx';
import Greet from './components/Greet.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="diana" />
        <Greet name="rahul" />

        <Greet name="hashini" />

        {/*<Welcome />*/}
      </div>
    );
  }
}

export default App;