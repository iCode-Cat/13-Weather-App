import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherProvider = createContext();
const WeatherContext = (props) => {
  let [city, setCity] = useState('New York');
  const [woeid, setWoeId] = useState(null);
  const [foreCast, setForeCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWoeid = async (id) => {
    if (!city) return;
    setLoading(false);
    city = city.toLocaleLowerCase();
    const url = `http://localhost:8080/metaweather.com/api/location/search/?query=${city}`;
    try {
      const get = await axios.get(url);
      if (get.data.length < 1) {
        return;
      }
      const woeId = get.data[0].woeid;
      setWoeId(woeId);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherInfo = async () => {
    console.log(true);
    if (woeid === null) return;
    let data;
    try {
      const get = await axios.get(
        `http://localhost:8080/www.metaweather.com/api/location/${woeid}/`,
      );
      data = get.data;
      const { time, title, consolidated_weather } = data;
      setForeCast({
        time,
        title,
        consolidated_weather,
      });
      setLoading(true);
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
    <WeatherProvider.Provider value={{ foreCast, setCity, loading }}>
      {props.children}
    </WeatherProvider.Provider>
  );
};

export default WeatherContext;
