import React, { Component, Fragment } from "react";
// import RenderToggleButton from "./Components/Renderprop/RenderToggleButton";
import ChildrenRenderProps from "./Components/#3 ChildrenRenderProps/ChildrenRenderProps";
import Portal from "./Components/#4 Portals/Portal";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">REACT 16.4 REVIEW</h1>
        </header>
        <ChildrenRenderProps>
          {({ on, toggle }) => (
            <Fragment>
              <h1>{on && <div>It works</div>}</h1>
              <button onClick={toggle}>Click this Render prop</button>
              <Portal>
                <h1>This is Our Portal</h1>
              </Portal>
            </Fragment>
          )}
        </ChildrenRenderProps>
      </div>
    );
  }
}

export default App;
