import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Environment from 'components/environment';
import Player from 'components/player';
import Block from 'components/block';

class App extends Component {
  static propTypes = {
    blocks: PropTypes.any.isRequired,
  }

  render() {
    return (
      <a-scene
        grid
        fog="type: linear; color#aab; far: 30; near: 0;"
      >
        <Environment />
        <Player />
        { this._renderBlocks(this.props.blocks) }
      </a-scene>
    );
  }

  _renderBlocks = (blocks) => {
    const blockArray = [];
    blocks.forEach(block => blockArray.push(
      <Block
        key={block.id}
        position={{ ...block.position }}
        color={block.color}
      />
    ));
    return blockArray;
  }
}

const mapStateToProps = ({ app }) => ({
  blocks: app.blocks,
});

export default connect(mapStateToProps)(App);

