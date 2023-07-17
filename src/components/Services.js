import React from 'react';
import Title from './Title.js';
import { services } from '../data.js';
import Service from './Service.js';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subheading='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
