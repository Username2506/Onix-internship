import { SET_WEATHER, SET_LOADING } from './types';

/* eslint-disable import/prefer-default-export */

export const setWeather = (weather) => ({ type: SET_WEATHER, weather });

export const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const getWeather = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(setWeather({
          city: response.location.name,
          tempC: response.current.temp_c,
          wind: response.current.wind_kph,
          condition: response.current.condition.text,
        }));
        dispatch(setLoading(false));
      })
      .catch(() => {
        alert('Не удалось получить информацию о погоде');
        dispatch(setLoading(false));
      });
  };
};
