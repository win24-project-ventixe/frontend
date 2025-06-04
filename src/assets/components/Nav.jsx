import React from 'react'
import NavLogo from '../Images/nav-logo.svg';
import EventIcon from '../Images/Event-icon.svg';

const Nav = () => {
  return (
    <nav className='portal-nav'>
      <div className='nav-logo'>
        <img src={NavLogo} alt='Logo' />
        <div className='logo-text'>Ventixe</div>
      </div>
      <div className='nav-links'>
        <button className='btn nav-btn'>
          <img src={EventIcon} alt='Event icon' />
          <span>Events</span>
        </button>
      </div>
    </nav>
  )
}

export default Nav