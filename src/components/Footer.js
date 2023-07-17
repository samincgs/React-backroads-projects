import React from 'react';
import { socialLinks } from '../data.js';
import PageLinks from './PageLinks.js';
import SocialLink from './SocialLink.js';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks listLink='footer-links' classLink='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} navIcon='footer-icon' />;
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
