export function setCoin(coin) {
  return { type: 'SET_COIN', payload: coin };
}

export function setDuration(duration) {
  console.log('duration is', duration);
  return { type: 'SET_DURATION', payload: duration };
}

export function addAPIData(APIdata, coin, duration) {
  console.log('COIN', coin);
  return { type: 'ADD_API_DATA', payload: APIdata, coin, duration };
}

export function getAPIData() {}

export function setFetchingData(fetchingData) {
  return { type: 'SET_FETCHING_DATA', payload: fetchingData };
}

export function setActivePoint(activePoint) {
  return { type: 'SET_ACTIVE_POINT', payload: activePoint };
}

export function setHoverLoc(hoverLoc) {
  return { type: 'SET_HOVER_LOC', payload: hoverLoc };
}
