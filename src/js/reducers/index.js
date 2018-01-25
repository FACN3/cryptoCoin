import { combineReducers } from 'redux';
import {
  data,
  coin,
  duration,
  hoverLoc,
  activePoint,
  authenticated,
  landingRedirect,
  username,
  socket
} from './reducers';

const rootReducer = combineReducers({
  coin,
  duration,
  hoverLoc,
  activePoint,
  data,
  authenticated,
  landingRedirect,
  username,
  socket
});

export default rootReducer;
