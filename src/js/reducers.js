import { combineReducers } from 'redux';

const coin = (state = 'BTC', action) => {
  if (action.type === 'SET_COIN') {
    return action.payload;
  }
  return state;
};

const duration = (state = ' 1D |', action) => {
  console.log('aaaaaaaaaaaaaaaaaa', state, action.payload);
  if (action.type === 'SET_DURATION') {
    return action.payload;
  }
  return state;
};

const fetchingData = (state = true, action) => {
  if (action.type === 'SET_FETCHING_DATA') {
    return action.payload;
  }
  return state;
};

const hoverLoc = (state = null, action) => {
  if (action.type === 'SET_HOVER_LOC') {
    return action.payload;
  }
  return state;
};

const activePoint = (state = null, action) => {
  if (action.type === 'SET_ACTIVE_POINT') {
    return action.payload;
  }
  return state;
};

const defaultState = {
  BTC: {
    '1H |': null,
    ' 1D |': null,
    ' 1W |': null,
    ' 1M |': null,
    ' 1Y': null
  },
  ETH: {
    '1H |': null,
    ' 1D |': null,
    ' 1W |': null,
    ' 1M |': null,
    ' 1Y': null
  },
  LTC: {
    '1H |': null,
    ' 1D |': null,
    ' 1W |': null,
    ' 1M |': null,
    ' 1Y': null
  }
};

const data = (state = defaultState, action) => {
  console.log('FUCK', action);
  if (action.type === 'ADD_API_DATA') {
    console.log('action is', action);
    return {
      ...state,
      [action.coin]: {
        ...state[action.coin],
        [action.duration]: action.payload
      }
      // come back here to check if data is going in right place
    }; // come back here to check if data is going in right place
  }
  return state;
};

const rootReducer = combineReducers({
  coin,
  duration,
  fetchingData,
  hoverLoc,
  activePoint,
  data
});

export default rootReducer;
