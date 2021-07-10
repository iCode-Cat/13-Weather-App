import React from 'react';
import './highlights.style.scss';

const testObject = [
  {
    title: 'test',
    value: '20',
    unit: '%',
  },
  {
    title: 'test',
    value: '20',
    unit: '%',
  },
  {
    title: 'test',
    value: '20',
    unit: '%',
  },
  {
    title: 'test',
    value: '20',
    unit: '%',
  },
];

const Highlight = () => {
  return <div className='highlight-box'>TEST</div>;
};

const Highlights = () => {
  return (
    <article className='highlights'>
      <p className='highlights-header'>Today’s Hightlights</p>
      <div className='highlights-wrapper'>
        {testObject.map((highlight, index) => (
          <Highlight key={index} />
        ))}
      </div>
    </article>
  );
};

export default Highlights;
