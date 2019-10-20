import React from 'react';

export default function Tile(props) {
  return (
    <div className='tile' onClick={()=> props.onClickHandler(props.index)}>{props.tile}</div>
  )
}