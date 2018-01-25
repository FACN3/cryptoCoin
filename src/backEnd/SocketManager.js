const { io } = require('./server.js');

const { createUser, createMessage, createChat } = require('./Factories');

let connectedUsers = {};

const communityChat = createChat();
function sendTypingToChat(user, socket) {
  return (chatId, isTyping) => {
    io.emit(`TYPING-${chatId}`, { user, isTyping });
  };
}

function sendMessageToChat(sender, socket) {
  return (chatId, message) => {
    io.emit(`MESSAGE_RECIEVED-${chatId}`, createMessage({ message, sender }));
  };
}

function addUser(userList, user) {
  const newList = Object.assign({}, userList);
  newList[user.name] = user;
  return newList;
}

function removeUser(userList, username) {
  const newList = Object.assign({}, userList);
  delete newList[username];
  return newList;
}

function isUser(userList, username) {
  return username in userList;
}

module.exports = function(socket) {

  let sendMessageToChatFromUser;

  let sendTypingFromUser;

  socket.on('VERIFY_USER', (nickname, callback) => {
    if (isUser(connectedUsers, nickname)) {
      callback({ isUser: true, user: null });
    } else {
      callback({ isUser: false, user: createUser({ name: nickname }) });
    }
  });

  socket.on('USER_CONNECTED', user => {
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;

    sendMessageToChatFromUser = sendMessageToChat(user.name, socket);
    sendTypingFromUser = sendTypingToChat(user.name, socket);

    io.emit('USER_CONNECTED', connectedUsers);
  });

  socket.on('disconnect', () => {
    if ('user' in socket) {
      connectedUsers = removeUser(connectedUsers, socket.user.name);

      io.emit('USER_DISCONNECTED', connectedUsers);
    }
  });

  socket.on('LOGOUT', () => {
    connectedUsers = removeUser(connectedUsers, socket.user.name);
    io.emit('USER_DISCONNECTED', connectedUsers);
  });

  socket.on('COMMUNITY_CHAT', callback => {
    callback(communityChat);
  });

  socket.on('MESSAGE_SENT', ({ chatId, message, socket }) => {
    sendMessageToChatFromUser(chatId, message, socket);
  });

  socket.on('TYPING', ({ chatId, isTyping }) => {
    sendTypingFromUser(chatId, isTyping);
  });
};
