import React from 'react';

function plantList(props) {
  return (
    <div>
      <button onClick={props.getPlants}>Get Plants</button>
    </div>
  )
}

export default plantList;