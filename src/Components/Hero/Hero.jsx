import React from 'react';
import Icon from '../../Images/Clear.png';

const weatherObject = {
  icon: '../../Images/Clear.png',
  degree: 30,
  status: 'Clear',
  location: 'Kiev',
};

const Hero = () => {
  const { icon, degree, status, location } = weatherObject;

  return (
    <section className='hero'>
      <header className='hero-header'>
        <button className='hero-header-button'>Seach for places</button>
        <span className='hero-header-location'>ICON</span>
      </header>
      <section className='hero-weather'>
        <img src={Icon} alt='weather-icon' className='hero-weather-icon' />
        <section className='hero-weather-degree'>
          <span className='hero-weather-degree-num'>30</span>
          <span className='hero-weather-degree-icon'>C</span>
        </section>
        <p className='hero-weather-status'>Shower</p>
        <div className='hero-weather-date'>
          <p>Today</p>
          <p>Fri, 7 Jun</p>
        </div>
        <div className='hero-weather-location'>
          <span className='hero-weather-location-icon'>ICON</span>
          <p className='hero-weather-location-name'>Kiev</p>
        </div>
      </section>
    </section>
  );
};

export default Hero;
