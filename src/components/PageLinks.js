import React from 'react';
import { pageLinks } from '../data.js';

const PageLinks = ({ listLink, classLink }) => {
  return (
    <ul className={listLink} id='nav-links'>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={classLink}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
