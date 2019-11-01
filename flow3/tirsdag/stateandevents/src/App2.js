import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

const response = await fetch('https://api.chucknorris.io/jokes/random');
const myJson = await response.json();
console.log(JSON.stringify(myJson));


class App extends Component {
  render() {
    return (
      <div>
        <Clock></Clock>
        <p></p>
      </div>
    );
  }
}

export default App;
