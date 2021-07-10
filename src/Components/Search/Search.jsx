import React, { useRef, useState } from 'react';
import './search.style.scss';

const Search = ({ tab, setTab, setCity }) => {
  const [samples, setSamples] = useState([
    {
      city: 'London',
    },
    {
      city: 'New York',
    },
    {
      city: 'Berlin',
    },
  ]);
  const input = useRef();

  const tabStyle = {
    left: `${tab ? 'var(--size-tab)' : '-100%'}`,
  };

  return (
    <section style={tabStyle} className='search-container'>
      <header className='search-header'>
        <span
          onClick={() => setTab(false)}
          className='material-icons search-header-icon'
        >
          close
        </span>
        <div className='search-header-nav'>
          <div className='search-header-input-holder'>
            <input ref={input} placeholder='search location' type='text' />
            <span className='material-icons'>search</span>
          </div>
          <button
            onClick={() => {
              setCity(input.current.value);
              setTab(false);
            }}
          >
            Search
          </button>
        </div>
      </header>
      <div className='sample-city'>
        {samples.map((sample, index) => (
          <div
            onClick={() => {
              setCity(sample.city);
              setTab(false);
            }}
            key={index}
            className='sample-city-box'
          >
            <p>{sample.city}</p>
            <span className='material-icons'>chevron_right</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
