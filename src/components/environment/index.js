import React, { Component } from 'react';

class environment extends Component {
  render() {
    return [
      <a-plane
        key="plane"
        rotation="-90 0 0"
        width="20"
        height="20"
        color="grey"
      />,
      <a-sky
        key="sky"
        color="#AAB"
        position=""
        rotation=""
        scale=""
        visible=""
        material=""
        geometry=""
      />
    ];
  }
}

export default environment;
