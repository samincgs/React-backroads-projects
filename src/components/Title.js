import React from 'react';

const Title = ({ title, subheading }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subheading}</span>
      </h2>
    </div>
  );
};

export default Title;
