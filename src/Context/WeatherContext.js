// eslint-disable-next-line
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export const WeatherProvider = createContext();
const WeatherContext = (props) => {
  let [city, setCity] = useState('New York');
  const [woeid, setWoeId] = useState(null);
  const [foreCast, setForeCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weekly, setWeekly] = useState([]);
  const [highlight, setHighlights] = useState([]);
  const getWoeid = async () => {
    if (!city) return;
    setLoading(false);
    city = city.toLocaleLowerCase();
    const url = `https://weather-api-33323.herokuapp.com/metaweather.com/api/location/search/?query=${city}`;
    try {
      const get = await axios.get(url);
      if (get.data.length < 1) {
        alert('No Data Found');
        setLoading(true);
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
        `https://weather-api-33323.herokuapp.com/www.metaweather.com/api/location/${woeid}/`
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

  useEffect(() => {
    if (foreCast.length < 1) return;
    // Highlights
    const {
      wind_speed,
      wind_direction_compass,
      wind_direction,
      humidity,
      visibility,
      air_pressure,
    } = foreCast.consolidated_weather[0];
    setHighlights([
      {
        title: 'Wind status',
        value: Math.floor(wind_speed),
        unit: 'mph',
        direction: wind_direction,
        directionCompass: wind_direction_compass,
      },
      {
        title: 'Humidity',
        value: humidity,
        unit: '%',
      },
      {
        title: 'Visibility',
        value: Math.floor(visibility),
        unit: 'miles',
      },
      {
        title: 'Air Pressure',
        value: air_pressure,
        unit: 'mp',
      },
    ]);
    // Weekly
    let weatherArray = [];
    const promise = foreCast.consolidated_weather.map((weather, index) => {
      const { applicable_date, min_temp, max_temp, weather_state_name } =
        weather;
      if (index === 0) return;
      weatherArray.push({
        applicable_date:
          index === 1
            ? 'Tomorrow'
            : moment(applicable_date).format('ddd, DD MMMM'),
        min_temp: Math.floor(min_temp),
        max_temp: Math.floor(max_temp),
        icon: weather_state_name.replace(' ', ''),
      });
    });
    Promise.all(promise).then(() => setWeekly(weatherArray));
  }, [foreCast]);
  return (
    <WeatherProvider.Provider
      value={{ foreCast, setCity, loading, weekly, highlight }}
    >
      {props.children}
    </WeatherProvider.Provider>
  );
};

export default WeatherContext;
