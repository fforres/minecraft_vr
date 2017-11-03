import React, { Component } from 'react';
import PropTypes from 'prop-types';
import grassTexture from '../../textures/grass.jpg';

class Assets extends Component {
  render() {
    return (
      <a-assets>
        <img
          id="texture"
          src={grassTexture}
        />
      </a-assets>
    );
  }
}

export default Assets;
