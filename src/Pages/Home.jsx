import React, { Fragment } from "react";
import Main from "../Components/Main/Main";
import WeatherContext from "../Context/WeatherContext";
const Home = () => {
  return (
    <WeatherContext>
      <Main />
    </WeatherContext>
  );
};

export default Home;
