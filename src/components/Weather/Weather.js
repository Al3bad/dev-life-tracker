import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.scss";

const Weather = (props) => {
  return (
    <div className="weather">
      {props.weather.icon && (
        <>
          <div className="icon-container">
            <ReactAnimatedWeather
              icon={props.weather.icon}
              color="white"
              size={100}
              animate={true}
            />
            <p>{props.weather.temperature}&deg;</p>
          </div>
          <p className="region">Australia, Melbourne</p>
        </>
      )}
    </div>
  );
};

export default Weather;
