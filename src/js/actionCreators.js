let nextMessageId = 0;
let nextUserId = 0;

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

export function addMessage(message, author) {
  return {
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    message,
    author
  };
}

export function addUser(name) {
  return {
    type: 'ADD_USER',
    id: nextUserId++,
    name
  };
}

export function messageReceived(message, author) {
  return {
    type: 'MESSAGE_RECEIVED',
    id: nextMessageId++,
    message,
    author
  };
}

export function populateUsersList(users) {
  return {
    type: 'USERS_LIST',
    users
  };
}
