import React from 'react';

const GalleryImages = (props) => {
  return(
    <img src={props.src} alt={props.name} />
  )
}

export default GalleryImages;