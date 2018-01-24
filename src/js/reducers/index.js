import { combineReducers } from 'redux';
import { data, coin, duration, hoverLoc, activePoint } from './reducers';

const rootReducer = combineReducers({
  coin,
  duration,
  hoverLoc,
  activePoint,
  data
});

export default rootReducer;
