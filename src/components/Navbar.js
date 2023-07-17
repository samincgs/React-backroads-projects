import React from 'react';
import logo from '../images/logo.svg';
import { socialLinks } from '../data.js';
import PageLinks from './PageLinks.js';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <PageLinks listLink='nav-links' classLink='nav-link' />

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className='nav-icon'
                  target='blank'
                  rel='noreferrer'
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
