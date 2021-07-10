import React from 'react';
import './weekly.style.scss';
const testObject = [
  {
    date: 'today',
    icon: 'Clear',
    maxTemp: 16,
    minTemp: 10,
  },
  {
    date: 'today',
    icon: 'Hail',
    maxTemp: 16,
    minTemp: 10,
  },
  {
    date: 'today',
    icon: 'Snow',
    maxTemp: 16,
    minTemp: 10,
  },
  {
    date: 'today',
    icon: 'Showers',
    maxTemp: 16,
    minTemp: 10,
  },
  {
    date: 'today',
    icon: 'Clear',
    maxTemp: 16,
    minTemp: 10,
  },
];

const WeeklyBox = ({ date, icon, maxTemp, minTemp }) => {
  return (
    <div className='weekly-box-wrapper'>
      <p className='weekly-box header'>{date}</p>
      <img src={icon + '.png'} alt='weather-icon' className='weekly-box icon' />
      <div className='weekly-box degree-minmax'>
        <p className='weekly-box max-degree'>{maxTemp + '°C'}</p>
        <p className='weekly-box min-degree'>{minTemp + '°C'}</p>
      </div>
    </div>
  );
};

const Weekly = () => {
  return (
    <article className='weekly-box-container'>
      {testObject.map((weather, index) => (
        <WeeklyBox key={index} {...weather} />
      ))}
    </article>
  );
};

export default Weekly;
