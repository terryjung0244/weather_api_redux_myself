import { WEATHER_CONST_STRING } from "../const/ActionConst";

const { GET_WEATHER_CURRENT_LOCATION, GET_WEATHER_CURRENT_LOCATION_REQUEST, GET_WEATHER_CURRENT_LOCATION_SUCCESS, GET_WEATHER_CURRENT_LOCATION_FAILURE } =
  WEATHER_CONST_STRING;

export const getWeatherCurrentLocationAction = (number) => {
  console.log(number);
  return {
    type: GET_WEATHER_CURRENT_LOCATION,
    payload: number,
  };
};

export const getWeatherCurrentLocationRequestAction = () => {
  return {
    type: GET_WEATHER_CURRENT_LOCATION_REQUEST,
  };
};

export const getWeatherCurrentLocationSuccessAction = (apiSuccess) => {
  console.log(apiSuccess);
  return {
    type: GET_WEATHER_CURRENT_LOCATION_SUCCESS,
    payload: apiSuccess,
  };
};

export const getWeatherCurrentLocationFailureAction = (apiFailed) => {
  return {
    type: GET_WEATHER_CURRENT_LOCATION_FAILURE,
    payload: apiFailed,
  };
};
