
import React, { Component } from 'react';
import Welcome from './components/welcome.jsx';
import Greet from './components/Greet.jsx';
import Message from './components/Message.jsx';
import Count from './components/Count.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        {/*<Message />*/}
       {/* <Greet name="diana" address="Bulathsinhala" >
          <p> This is children prop </p></Greet>
        <Greet name="rahul" address="Horana" >
          <button> submit</button>
          </Greet> 
          <Greet name="hashini" address="colombo">
        </Greet> 

        <Welcome name="diana" address="Bulathsinhala" />
        <welcome name="rahul" address="Horana" />
        <welcome name="hashini"  address="colombo"  /> */}
      </div>
    );
  }
}

export default App;