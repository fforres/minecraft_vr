import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <a-entity
        camera="userHeight: 1.6"
        look-controls
        wasd-controls
        collider-check
      >
        <a-entity
          position="0 0 -0.5"
          raycaster="interval: 100; objects: .cubeGenerator"
          geometry={`
            primitive: ring;
            radiusInner: 0.008;
            radiusOuter: 0.01;
          `}
          material="color: green;">
        </a-entity>
      </a-entity>
    );
  }
}

export default Player;
