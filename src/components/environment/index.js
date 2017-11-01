import React, { Component } from 'react';

class Environment extends Component {
  render() {
    return [
      <a-cylinder
        key="ground"
        id="ground"
        position="0 -0.1 0"
        radius="40"
        height="0.1"
        color="grey"
        className="cubeGenerator"
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

export default Environment;
