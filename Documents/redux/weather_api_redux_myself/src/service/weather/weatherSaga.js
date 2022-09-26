import { takeLatest, put, select } from "redux-saga/effects";
import { WEATHER_CONST_STRING } from "../const/ActionConst";
import { getWeatherCurrentLocationSuccessAction, getWeatherCurrentLocationFailureAction } from "./weatherAction";

const { GET_WEATHER_CURRENT_LOCATION_REQUEST } = WEATHER_CONST_STRING;

function* getWeatherCurrentPositionBySaga(action) {
  const { weatherReducer } = yield select();
  const lat = weatherReducer.weatherData.currentLocation.lat;
  const lon = weatherReducer.weatherData.currentLocation.lon;
  // let API_KEY = cce74318cf743d1d509d998930208a12;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cce74318cf743d1d509d998930208a12`;
  let response = yield fetch(url);
  let data = yield response.json();
  if (data) {
    yield put(getWeatherCurrentLocationSuccessAction(data));
  } else {
    yield put(getWeatherCurrentLocationFailureAction("Failed"));
  }
}

export function* weatherSagaWatcher() {
  yield takeLatest(GET_WEATHER_CURRENT_LOCATION_REQUEST, getWeatherCurrentPositionBySaga);
}
