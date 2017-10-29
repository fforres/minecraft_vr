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
      </a-scene>
    );
  }
}

export default App;
