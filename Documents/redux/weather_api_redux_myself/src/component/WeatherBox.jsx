import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      <h1>{weather?.name}</h1>
      <h2>{weather?.main.temp}</h2>
    </div>
  );
};

export default WeatherBox;
