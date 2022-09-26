import { WEATHER_CONST_STRING } from "../const/ActionConst";

const { GET_WEATHER_CURRENT_LOCATION, GET_WEATHER_CURRENT_LOCATION_REQUEST, GET_WEATHER_CURRENT_LOCATION_SUCCESS, GET_WEATHER_CURRENT_LOCATION_FAILURE } =
  WEATHER_CONST_STRING;

const initialState = {
  weatherData: {
    currentLocation: null,
    data: null,
    loading: false,
  },
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_CURRENT_LOCATION:
      console.log(action.payload);
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          currentLocation: action.payload,
        },
      };

    case GET_WEATHER_CURRENT_LOCATION_REQUEST:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          loading: true,
        },
      };

    case GET_WEATHER_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          data: action.payload,
          loading: false,
        },
      };

    case GET_WEATHER_CURRENT_LOCATION_FAILURE:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          data: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
}
