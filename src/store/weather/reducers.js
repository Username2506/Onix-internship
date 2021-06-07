import { SET_WEATHER, SET_LOADING } from './types';

const initialState = { 
  weather: {} 
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.weather
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}
