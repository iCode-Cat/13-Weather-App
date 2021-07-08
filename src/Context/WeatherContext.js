import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherProvider = createContext();

const WeatherContext = (props) => {
  const [city, setCity] = useState('kiev');
  const [woeid, setWoeId] = useState(null);
  const [foreCast, setForeCast] = useState([]);

  const getWoeid = async () => {
    if (!city) return;
    const url = `https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?query=${city}`;
    try {
      const get = await axios.get(url);
      const woeId = get.data[0].woeid;
      setWoeId(woeId);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getWeatherInfo = async () => {
    if (woeid === null) return;
    // let weeklyForeCast;
    // let cityName;
    // let todayDate;
    let data;
    try {
      const get = await axios.get(
        `https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${woeid}/`,
      );
      data = get.data;
      const { time, title, consolidated_weather } = data;
      setForeCast({
        time,
        title,
        consolidated_weather,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getWoeid();
  }, [city]);
  // Get Weather Information
  useEffect(() => {
    getWeatherInfo();
  }, [woeid]);

  return (
    <WeatherProvider.Provider value={{ foreCast, setCity }}>
      {props.children}
    </WeatherProvider.Provider>
  );
};

export default WeatherContext;
