import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function paintingsList(props) {

  return (
    <Carousel width="50%" showArrows={true} showThumbs={false} onClickItem={(index) => {
      props.showArtwork(props.paintings[index].ObjectNumber)
    }}>
      {
        props.paintings.map((painting) => (
          <div className="paintings-list" key={painting.ObjectNumber}>
            <img src={painting.WebImage.Url} alt="painting" />
            <h1 className="legend">{painting.Title}</h1>
          </div>
        ))
      }
    </Carousel>
  )
}

export default paintingsList;