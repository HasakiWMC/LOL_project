import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Edit <code>src/App.js</code> and save to reload.!!!
          </h1>
      </div>
    );
  }
}

let ab = async args=>{
    const {a , b} = args;
    await console.log("Hello world!",a,b)
};

ab({a:1,b:2});

export default App;
