import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Favorite = (props) => {
  const allFavoritePhotos = props.favoritePhotos.map((item)=><img src={item.urls.thumb} key={item.id} alt='favoritePhoto'/>)
  return (
    <div className='favorite-images'>
      {allFavoritePhotos.length>0 ? allFavoritePhotos : <h2>Empty, nothing to show</h2>}
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