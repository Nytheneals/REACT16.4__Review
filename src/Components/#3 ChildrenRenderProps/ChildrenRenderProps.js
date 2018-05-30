import React, { Component } from 'react';

class ChildrenRenderProps extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    const { children } = this.props;

    return <div>{children({ on: this.state.on, toggle: this.toggle })}</div>;
  }
}

export default ChildrenRenderProps;
