import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const SinglePagePhoto = (props) => {
  return (
    <div className='single-page-photo'>
      <h1>{props.name ? `Name: ${props.name}`:"One day on this page will be info about selected image. But not now ;)"}</h1>
      <img src={props.src} alt={props.name} />
      <NavLink to ='/gallery'><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
    </div>
  )
}

export default SinglePagePhoto;