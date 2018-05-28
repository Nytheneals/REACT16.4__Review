import React, { Component } from "react";

class BasicToggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>Click Me</button>
      </div>
    );
  }
}

export default BasicToggle;
