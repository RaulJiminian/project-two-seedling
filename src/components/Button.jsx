import React from 'react';

export default function Button(props) {
  return (
    <div onClick={props.getPaintings} id="button-body">
      <div className='button-content'>
        <span>Discover Artwork</span>
        <div className="liquid"></div>
      </div>
    </div>
  )
}