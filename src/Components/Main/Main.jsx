import React from 'react';
import Hero from '../Hero/Hero';
import Weekly from '../Weekly/Weekly';
import Highlights from '../Highlights/Highlights';
import './main.style.scss';

const Main = () => {
  return (
    <main className='main'>
      <article className='main-article'>
        <Hero />
        <section className='weather-details'>
          <Weekly />
          <Highlights />
        </section>
      </article>
    </main>
  );
};

export default Main;
