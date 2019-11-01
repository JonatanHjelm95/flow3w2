import React, { Component } from 'react';
import logo from './logo.svg';
import person, {males, females} from "./file2";

const { firstName, email } = person;
const arr1 = males.concat(females).join(" ,");
males.push("Kurt")
females.push("Tina")
const arr2 = males.concat(females).join(", ")
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App2</h2>
     

        </div>
        <p className="App-intro">
        <p>{firstName}</p>
        <p>{email}</p>

        <p>{arr1}</p>
        <p>{arr2}</p>

        </p>
      </div>
    );
  }
}

export default App;
