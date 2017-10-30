import React, { Component } from 'react';
import Environment from 'components/environment';

class App extends Component {
  render() {
    return (
      <a-scene
        grid
        fog="type: linear; color#aab; far: 30; near: 0;"
      >
        <Environment />
        <a-box
          id="1"
          depth="1"
          height="1"
          width="1"
          position="0.5 0.5 0.5"
        ></a-box>
        <a-entity
          id="2"
          geometry={`
            depth=1;
            height=1;
            width=1;
          `}
          position="1.5 0.5 1.5"
        ></a-entity>
      </a-scene>
    );
  }
}

export default App;
