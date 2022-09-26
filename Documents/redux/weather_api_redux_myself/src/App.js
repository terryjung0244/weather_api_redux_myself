import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherBox from "./component/WeatherBox";
import { getWeatherCurrentLocationAction, getWeatherCurrentLocationRequestAction } from "./service/weather/weatherAction";

const App = () => {
  const dispatch = useDispatch();
  const { weatherData } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    //현재의 지표
    navigator.geolocation.getCurrentPosition((latlon) => {
      dispatch(
        getWeatherCurrentLocationAction({
          lat: latlon.coords.latitude,
          lon: latlon.coords.longitude,
        })
      );
    });
  }, []);

  useEffect(() => {
    //api로 콜 하기
    if (weatherData.currentLocation) {
      dispatch(getWeatherCurrentLocationRequestAction());
    }
  }, [weatherData.currentLocation]);

  console.log(weatherData.data);

  return (
    <div>
      <div>
        <WeatherBox weather={weatherData.data} />
      </div>
    </div>
  );
};

export default App;
