import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Counter(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.number);

  useEffect(() => {
    localStorage.setItem("count", count)
  });


  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        plus
      </button>
      <button onClick={() => setCount(count - 1)}>
        minus
      </button>
    </div>
  );
}
function storeValue(value) {
  localStorage.setItem("value", value)

}
function StoredCounter() {
  return localStorage.getItem("value") //Returns value as a string
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter: <Counter number={0} /></h1>
        <h1></h1>
      </div>
    );
  }
}

export default App;
