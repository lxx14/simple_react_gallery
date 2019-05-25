import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Favorite = (props) => {
  if(props.favoritePhotos.length>0) {
    const allFavoritePhotos = props.favoritePhotos.map((item)=><img src={item.urls.thumb} key={item.id} alt='favoritePhoto'/>)
  } else {
    const allFavoritePhotos = <h2>Empty, nothing to show</h2>
  }
  return (
    <div className='favorite-images'>
      {allFavoritePhotos}
    </div>
  )
}

const mapStateToProps = (state) => {
  const favoritePhotos = state.favorite.favoritePhotos
  return {
    favoritePhotos
  }
}

export default connect(mapStateToProps)(Favorite);