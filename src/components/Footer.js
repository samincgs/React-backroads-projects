import React from 'react';
import { socialLinks } from '../data.js';
import PageLinks from './PageLinks.js';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks listLink='footer-links' classLink='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                className='footer-icon'
                rel='noreferrer'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
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
