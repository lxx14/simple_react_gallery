import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryImages = (props) => {
  return(
    <NavLink to ={`/photo/${props.id}`}><img src={props.src} id={props.id} alt={props.name} /></NavLink>
  )
}

export default GalleryImages;