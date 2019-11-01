import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App1</h2>
     

        </div>
        <p className="App-intro">
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>

        </p>
      </div>
    );
  }
}

export default App;
