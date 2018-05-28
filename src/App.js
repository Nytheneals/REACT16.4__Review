import React, { Component } from "react";
import RenderToggleButton from "./Components/Renderprop/RenderToggleButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REACT 16.4 REVIEW</h1>
        </header>
        <RenderToggleButton
          render={({ on, toggle }) => (
            <div>
              <h1>{on && <div>It works</div>}</h1>
              <button onClick={toggle}>Click this Render prop</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
