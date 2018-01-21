export function setCoin(coin) {
  return { type: 'SET_COIN', payload: coin };
}

export function setDuration(duration) {
  return { type: 'SET_DURATION', payload: duration };
}

export function addAPIData(APIdata, coin, duration) {
  return {
    type: 'ADD_API_DATA',
    payload: APIdata,
    metadata: {
      coin,
      duration
    }
  };
}

export function setActivePoint(activePoint) {
  return { type: 'SET_ACTIVE_POINT', payload: activePoint };
}

export function setHoverLoc(hoverLoc) {
  return { type: 'SET_HOVER_LOC', payload: hoverLoc };
}
