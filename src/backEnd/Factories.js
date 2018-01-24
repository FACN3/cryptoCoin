const uuidv4 = require('uuid/v4');

const getTime = date =>
  `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;

const createUser = ({ name = '' } = {}) => ({
  id: uuidv4(),
  name
});

const createMessage = ({ message = '', sender = '' } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender
});

const createChat = ({
  messages = [],
  name = 'CryptoCoin',
  users = []
} = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: []
});

module.exports = {
  createMessage,
  createChat,
  createUser
};
