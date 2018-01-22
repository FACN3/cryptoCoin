import { combineReducers } from 'redux';
import {
  data,
  coin,
  duration,
  hoverLoc,
  activePoint,
  publicmessages,
  publicusers
} from './reducers';

const rootReducer = combineReducers({
  coin,
  duration,
  hoverLoc,
  activePoint,
  data,
  publicmessages,
  publicusers
});

export default rootReducer;
