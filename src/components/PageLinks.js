import React from 'react';
import { pageLinks } from '../data.js';
import PageLink from './PageLink.js';

const PageLinks = ({ listLink, classLink }) => {
  return (
    <ul className={listLink} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} classLink={classLink} />;
      })}
    </ul>
  );
};

export default PageLinks;
