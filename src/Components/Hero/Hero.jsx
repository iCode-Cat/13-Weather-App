import React, { useContext, useState, useEffect } from 'react';
import Icon from '../../Images/Clear.png';
import { WeatherProvider } from '../../Context/WeatherContext';
import Background from '../../Images/background.png';
import './hero.style.scss';

const weatherObject = {
  icon: '../../Images/Clear.png',
  degree: 30,
  status: 'Clear',
  location: 'Kiev',
};

const Hero = () => {
  const { foreCast } = useContext(WeatherProvider);
  const { title, consolidated_weather } = foreCast;
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    if (consolidated_weather) {
      const { the_temp, weather_state_name } = consolidated_weather[0];
      setCurrentWeather({
        degree: Math.floor(the_temp),
        icon: weather_state_name,
        status: weather_state_name,
      });
    }
  }, [foreCast]);

  console.log(foreCast);

  return (
    <section className='hero'>
      <header className='hero-header'>
        <button className='hero-header-button'>Seach for places</button>
        <span className='hero-header-location material-icons'>gps_fixed</span>
      </header>

      <section className='hero-weather'>
        <img src={Icon} alt='weather-icon' className='hero-weather-icon' />
        <section className='hero-weather-degree'>
          <span className='hero-weather-degree-num'>
            {currentWeather.degree}
          </span>
          <span className='hero-weather-degree-icon'>°C</span>
        </section>
        <p className='hero-weather-status'>{currentWeather.status}</p>
        <div className='hero-weather-date'>
          <p>Today</p>
          <span>*</span>
          <p>Fri, 7 Jun</p>
        </div>
        <div className='hero-weather-location'>
          <span className='hero-weather-location-icon material-icons'>
            location_on
          </span>
          <p className='hero-weather-location-name'>{title}</p>
        </div>
      </section>
    </section>
  );
};

export default Hero;
