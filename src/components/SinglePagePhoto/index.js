import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

const SinglePagePhoto = (props) => {
  return (
    <div className='single-page-photo'>
      <h1>Author: {props.singlePhoto.user.name}</h1>
      <h4>Created: {new Date().toDateString(props.singlePhoto.created_at)}</h4>
      <img src={props.singlePhoto.urls.thumb} alt={props.singlePhoto.user.name} />
      <NavLink to ='/gallery'><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const idSinglePhoto = ownProps.match.params.id;
  const singlePhoto = state.gallery.photos.find((item)=>idSinglePhoto===item.id);
  console.log(singlePhoto);
  return {
    singlePhoto
  }
}

export default connect(mapStateToProps)(SinglePagePhoto);