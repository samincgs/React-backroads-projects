import React from 'react';

const Service = ({ icon, text, paragraph }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{text}</h4>
        <p className='service-text'>{paragraph}</p>
      </div>
    </article>
  );
};
export default Service;
