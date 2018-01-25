import { combineReducers } from 'redux';
import {
  data,
  coin,
  duration,
  hoverLoc,
  activePoint,
  authenticated,
  landingRedirect
} from './reducers';

const rootReducer = combineReducers({
  coin,
  duration,
  hoverLoc,
  activePoint,
  data,
  authenticated,
  landingRedirect
});

export default rootReducer;
