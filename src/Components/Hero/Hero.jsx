import React, { useContext, useState, useEffect } from 'react';
import { WeatherProvider } from '../../Context/WeatherContext';
import moment from 'moment';
import LoaderIcon from '../LoaderIcon';
import Search from '../Search/Search';
import './hero.style.scss';
import axios from 'axios';

const Hero = () => {
  const { foreCast, setCity, loading } = useContext(WeatherProvider);
  const { title, consolidated_weather } = foreCast;
  const [currentWeather, setCurrentWeather] = useState([]);
  const [tab, setTab] = useState(false);

  const loadingStyle = {
    opacity: `${loading ? '100%' : 0}`,
  };

  const locationHandler = async () => {
    const url =
      'http://api.ipstack.com/check?access_key=f642f96c92cfc432db124f643f539296&format=1';
    try {
      const get = await axios.get(url);
      let cityName = get.data.city;

      if (cityName === 'Kyiv') {
        cityName = 'Kiev';
      }
      setCity(cityName);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (consolidated_weather) {
      const { the_temp, weather_state_name } = consolidated_weather[0];
      setCurrentWeather({
        degree: Math.floor(the_temp),
        icon: weather_state_name.replace(' ', ''),
        status: weather_state_name,
      });
    }
  }, [foreCast]);

  return (
    <section className='hero'>
      {!loading && <LoaderIcon />}
      <Search tab={tab} setCity={setCity} setTab={setTab} />
      <header className='hero-header'>
        <button onClick={() => setTab(true)} className='hero-header-button'>
          Seach for places
        </button>
        <span
          onClick={locationHandler}
          className='hero-header-location material-icons'
        >
          gps_fixed
        </span>
      </header>
      <section style={loadingStyle} className='hero-weather'>
        <img
          src={`/${currentWeather.icon}.png`}
          alt='weather-icon'
          className='hero-weather-icon'
        />
        <section className='hero-weather-degree'>
          <span className='hero-weather-degree-num'>
            {currentWeather.degree}
          </span>
          <span className='hero-weather-degree-icon'>°C</span>
        </section>
        <p className='hero-weather-status'>{currentWeather.status}</p>
        <div className='hero-weather-date'>
          <p>Today</p>
          <span>·</span>
          <p>{moment().format('ddd, DD MMMM')}</p>
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
