import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import BasicToggle from "./BasicToggle";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BasicToggle>
          <h1>Hey You didn't do it bro </h1>
        </BasicToggle>
      </div>
    );
  }
}

export default App;
