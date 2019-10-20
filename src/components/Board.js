import React from 'react';
import Tile from './Tile';

export default function Board(props) {
  return (
    <div className='board'>
      {props.tiles.map((tile, index) => <Tile tile={tile} index={index} key={index} onClickHandler={props.onClickHandler}/>)}
    </div>
  )
}