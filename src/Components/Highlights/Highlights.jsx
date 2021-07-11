import React, { useContext } from 'react';
import { WeatherProvider } from '../../Context/WeatherContext';
import ProgressBar from '@ramonak/react-progress-bar';
import './highlights.style.scss';

const Highlight = ({ title, value, unit, direction, directionCompass }) => {
  return (
    <div className='highlight-box'>
      <p className='highlight-title'>{title}</p>
      <p className='highlight-value'>
        {value}
        <span className='highlight-unit'>{unit}</span>
      </p>
      {title === 'Humidity' && (
        <div className='wind'>
          <div className='wind-value'>
            <p>0</p>
            <p>50</p>
            <p>100</p>
          </div>
          <ProgressBar
            className='wind-progress'
            bgColor={'#FFEC65'}
            height={8}
            isLabelVisible={false}
            completed={value}
          />
          <p className='wind-unit'>%</p>
        </div>
      )}
      {title === 'Wind status' && (
        <div className='direction'>
          <span
            style={{
              transform: `rotate(${direction - 45}deg)`,
              transition: '1s',
            }}
            className='direction-icon material-icons'
          >
            near_me
          </span>
          <p className='direction-compass'> {directionCompass} </p>
        </div>
      )}
    </div>
  );
};

const Highlights = () => {
  const { highlight } = useContext(WeatherProvider);
  return (
    <article className='highlight'>
      {highlight.length > 1 && (
        <p className='highlight-header'>Today’s Hightlights</p>
      )}
      <div className='highlight-wrapper'>
        {highlight.map((highlights, index) => (
          <Highlight key={index} {...highlights} />
        ))}
      </div>
    </article>
  );
};

export default Highlights;
