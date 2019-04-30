import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
const Header = () => {
  return (
    <ul className='navi'>
      <li><NavLink to='/'>Description</NavLink></li>
      <li><NavLink to='/gallery'>GALLERY</NavLink></li>
      <li><NavLink to='/contacts'>Contacts</NavLink></li>
    </ul>
  )
}

export default Header;