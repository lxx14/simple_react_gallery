import React, { Component } from 'react';
import GalleryImages from './GalleryImages';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhotosFromServer } from './service';
import { fetchPhotosAction } from './actions';
import './style.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setPhotos()
  }

  render() {
    const photoArray = this.props.photosFromRedux.map((item)=> {
      return  <GalleryImages key={item.id} id={item.id} src={item.urls.thumb} alt={item.created_at} />
    })
    return(
      <div className='photo-container'>
      {photoArray}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  photosFromRedux: state.gallery.photos,
});

const mapDispatchToProps = {
  setPhotos: fetchPhotosAction
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);