import React from 'react';
import { Link } from 'react-router-dom';

function paintingsList(props) {
  return (
    <div>
      <button onClick={props.getPaintings}>Search Paintings</button>
      {
        props.paintings.map((painting) => (
          <Link to={`/artwork/${painting.ObjectNumber}`} key={painting.ObjectNumber}>
            <div className="paintings-list">
              <img src={painting.WebImage.Url} alt="painting" />
              <h1>Maker: {painting.PrincipalOrFirstMaker}</h1>
              <p>Title: {painting.Title}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default paintingsList;