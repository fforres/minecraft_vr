import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {
  render() {
    const { color, position } = this.props;
    const { x, y, z } = position;
    return (
      <a-box
        collider-check
        position={`${x} ${y} ${z}`}
        material={`color: ${color}`}
        snap="offset: 0.5 0.5 0.5; snap: 1 1 1"
      />
    );
  }
}

Box.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    z: PropTypes.number.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default Box;
