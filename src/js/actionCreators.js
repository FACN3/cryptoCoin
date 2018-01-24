export function setCoin(coin) {
  return { type: 'SET_COIN', payload: coin };
}

export function setDuration(duration) {
  return { type: 'SET_DURATION', payload: duration };
}

export function setActivePoint(activePoint) {
  return { type: 'SET_ACTIVE_POINT', payload: activePoint };
}

export function setHoverLoc(hoverLoc) {
  return { type: 'SET_HOVER_LOC', payload: hoverLoc };
}

export function setAuthenticated(authenticated) {
  return { type: 'SET_AUTHENTICATED', payload: authenticated };
}

export function setLandingRedirect(redirect) {
  return { type: 'SET_LANDING_REDIRECT', payload: redirect };
}
