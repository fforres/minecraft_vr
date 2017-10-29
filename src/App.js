import React, { Component } from 'react';

window.AFRAME.registerComponent('qwe', {})

class App extends Component {
  render() {
    return (
    <a-scene
        fog="type: linear; color#aab; far: 30; near: 0;"
      >
        <a-plane
          rotation="-90 0 0"
          width="20"
          height="20"
          color="grey"
        >
        </a-plane>
        <a-sky color="#AAB" position="" rotation="" scale="" visible="" material="" geometry=""></a-sky>
      </a-scene>
    );
  }
}

export default App;
