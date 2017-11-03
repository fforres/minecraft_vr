import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <a-entity
        camera="userHeight: 1.6"
        look-controls
        wasd-controls
      >
        <a-entity
          cursor
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          material="color: black; shader: flat"
        >
        </a-entity>
      </a-entity>
    );
  }
}

export default Player;
