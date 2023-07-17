import React from 'react';

const SocialLink = ({ href, icon, navIcon }) => {
  return (
    <li>
      <a href={href} className={navIcon} target='blank' rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
