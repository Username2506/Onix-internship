import { combineReducers } from 'redux';
import weather from './weather/reducers';

const rootReduser = combineReducers({
  weather
});

export default rootReduser;
