import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteImgAction } from './actions';
import './style.scss';

class Favorite extends Component {

  deleteImgHandler = (e) => {
    this.props.deleteImg(e.target);
  }

  render() {
    if (this.props.favoritePhotos.length > 0) {
      const allFavoritePhotos = this.props.favoritePhotos.map((item) => <img id={item.id} src={item.urls.thumb} key={item.id} alt='favoritePhoto' onClick={this.deleteImgHandler}/>)
    } else {
      const allFavoritePhotos = <h2>Empty, nothing to show</h2>
    }
    return (
      <div className='favorite-images'>
        {allFavoritePhotos}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const favoritePhotos = state.favorite.favoritePhotos
  return {
    favoritePhotos
  }
}

const mapDispatchToProps = {
  deleteImg: deleteImgAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);