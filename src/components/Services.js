import React from 'react';
import Title from './Title.js';
import { services } from '../data.js';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subheading='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return (
            <article className='service' key={service.id}>
              <span className='service-icon'>
                <i className={service.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{service.text}</h4>
                <p className='service-text'>{service.paragraph}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
