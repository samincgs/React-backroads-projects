import React from 'react';
import Title from './Title.js';
import { tours } from '../data.js';
import Tour from './Tour.js';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subheading='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
