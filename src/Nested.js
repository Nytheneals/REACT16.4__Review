import React, { Component } from 'react';

class Nested extends Component {
  render() {
    console.log(this.props);
    return <div>Hey</div>;
  }
}

export default Nested;
