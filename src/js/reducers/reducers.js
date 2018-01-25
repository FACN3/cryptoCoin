import { cryptocompareSort, coindeskSort } from '../util/sortData';

export function coin(state = 'BTC', action) {
  if (action.type === 'SET_COIN') {
    return action.payload;
  }
  return state;
}

export function duration(state = ' 1D |', action) {
  if (action.type === 'SET_DURATION') {
    return action.payload;
  }
  return state;
}

export function hoverLoc(state = null, action) {
  if (action.type === 'SET_HOVER_LOC') {
    return action.payload;
  }
  return state;
}

export function activePoint(state = null, action) {
  if (action.type === 'SET_ACTIVE_POINT') {
    return action.payload;
  }
  return state;
}

const defaultState = {
  isFetching: true,
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

export function data(state = defaultState, action) {
  let sortedData;
  switch (action.type) {
    case 'ADD_API_DATA_PENDING':
      return { ...state, isFetching: true };
    case 'ADD_API_DATA_FULFILLED':
      sortedData =
        action.meta.duration === ' 1M |' && action.meta.coin === 'BTC'
          ? coindeskSort(action.payload.data.bpi, action.coin, action.duration)
          : cryptocompareSort(
              action.payload.data.Data,
              action.coin,
              action.duration
            );

      return {
        ...state,
        isFetching: false,
        [action.meta.coin]: {
          ...state[action.meta.coin],
          [action.meta.duration]: sortedData
        }
      };
    case 'ADD_API_DATA_REJECTED':
      return { ...state, error: true };
    default:
      return state;
  }
}

export function authenticated(state = false, action) {
  if (action.type === 'SET_AUTHENTICATED') {
    return action.payload;
  }
  return state;
}

// export function landingRedirect(state = '/login', action) {
//   if (action.type === 'SET_LANDING_REDIRECT') {
//     return action.payload;
//   }
//   return state;
// }
