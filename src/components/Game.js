import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [null, null, null, null, null, null, null, null, null],
      currentPlayer: 'X'
    }
  }

  onClickHandler = (index) => {
    if (!this.state.tiles[index]) {
      let newTiles = [...this.state.tiles];
      newTiles[index] = this.state.currentPlayer;
      let newPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
      this.setState({ tiles: newTiles, currentPlayer: newPlayer });
    }

  }

  componentDidUpdate() {
    if (this.state.tiles[0] === 'X') {
      console.log('first tile is 1')
    }
  }

  render() {
    return (
      <div>
        <Board tiles={this.state.tiles} onClickHandler={this.onClickHandler}/>
      </div>
    )
  }
}