import React, { useContext } from 'react';
import { WeatherProvider } from '../../Context/WeatherContext';
import './weekly.style.scss';

const WeeklyBox = ({ min_temp, max_temp, icon, applicable_date }) => {
  return (
    <div className='weekly-box-wrapper'>
      <p className='weekly-box header'>{applicable_date}</p>
      <img src={icon + '.png'} alt='weather-icon' className='weekly-box icon' />
      <div className='weekly-box degree-minmax'>
        <p className='weekly-box max-degree'>{max_temp + '°C'}</p>
        <p className='weekly-box min-degree'>{min_temp + '°C'}</p>
      </div>
    </div>
  );
};

const Weekly = () => {
  const { weekly } = useContext(WeatherProvider);
  return (
    <article className='weekly-box-container'>
      {weekly.map((weather, index) => (
        <WeeklyBox key={index} {...weather} />
      ))}
    </article>
  );
};

export default Weekly;
