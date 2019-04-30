import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

class SinglePagePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    }
  }
  addToFavorite = () => {
    this.setState({
      value: !this.state.value
    })
  }

  render() {
    return (
      <div className='single-page-photo'>
        <h1>Author: {this.props.singlePhoto.user.name}</h1>
        <h4>Created: {new Date().toDateString(this.props.singlePhoto.created_at)}</h4>
        <div className='img-wrapper'>
          <img src={this.props.singlePhoto.urls.thumb} alt={this.props.singlePhoto.user.name} />
          <i className={this.state.value?"fas fa-star active" : "fas fa-star"} onClick={this.addToFavorite}></i>
        </div>
        <NavLink to='/gallery'><i className="fas fa-arrow-alt-circle-left"></i></NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const idSinglePhoto = ownProps.match.params.id;
  const singlePhoto = state.gallery.photos.find((item) => idSinglePhoto === item.id);
  return {
    singlePhoto
  }
}

export default connect(mapStateToProps)(SinglePagePhoto);