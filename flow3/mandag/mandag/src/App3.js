import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import person, {names} from "./file2";


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function WelcomePerson(props) {
  return <p>firstname: {props.person.firstName}, lastname: {props.person.lastName}, email {props.person.email}</p>
}

function App() {
  return (
    <div>
      <WelcomePerson person={names[2]} />
    </div>
  );
}




export default App;
