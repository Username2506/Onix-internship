import { SET_WEATHER } from './types';

export default function weather(state = { weather: {} }, action) {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.weather
      };
    default:
      return state;
  }
}
