import React from 'react';

const PageLink = ({ href, text, classLink }) => {
  return (
    <li>
      <a href={href} className={classLink}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
