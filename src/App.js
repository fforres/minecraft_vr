import React, { Component } from 'react';
import Environment from 'components/environment';
import Player from 'components/player';

class App extends Component {
  render() {
    return (
      <a-scene
        grid
        fog="type: linear; color#aab; far: 30; near: 0;"
      >
        <Environment />
        <Player />
      </a-scene>
    );
  }
}

export default App;
