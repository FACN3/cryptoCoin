import React, { Component } from 'react';
import SideBar from './SideBar';
import ChatHeading from './ChatHeading';
import Messages from './Messages';
import MessageInput from './MessageInput';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      activeChat: null
    };
    this.resetChat = this.resetChat.bind(this);
    this.setActiveChat = this.setActiveChat.bind(this);
    this.updateTypingInChat = this.updateTypingInChat.bind(this);
    this.addMessageToChat = this.addMessageToChat.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendTyping = this.sendTyping.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;
    socket.emit('COMMUNITY_CHAT', this.resetChat);
  }
  setActiveChat(activeChat) {
    this.setState({ activeChat });
  }

  resetChat(chat) {
    return this.addChat(chat, true);
  }

  addChat(chat, reset) {
    console.log('addchatyo');
    const { socket } = this.props;
    const { chats } = this.state;

    const newChats = reset ? [chat] : [...chats, chat];
    this.setState({
      chats: newChats,
      activeChat: reset ? chat : this.state.activeChat
    });

    const messageEvent = `MESSAGE_RECIEVED-${chat.id}`;
    const typingEvent = `TYPING-${chat.id}`;

    socket.on(
      typingEvent,
      this.updateTypingInChat(chat.id),
      console.log('chatting')
    );
    socket.on(
      messageEvent,
      this.addMessageToChat(chat.id),
      console.log('peepee', messageEvent)
    );
  }

  addMessageToChat(chatId) {
    console.log('echo2');
    return message => {
      const { chats } = this.state;
      const newChats = chats.map(chat => {
        if (chat.id === chatId) chat.messages.push(message);
        return chat;
      });

      this.setState({ chats: newChats });
    };
  }

  updateTypingInChat(chatId) {
    console.log('echo');
    return ({ isTyping, user }) => {
      if (user !== this.props.user.name) {
        const { chats } = this.state;

        const newChats = chats.map(chat => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter(u => u !== user);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  }

  sendMessage(chatId, message) {
    const { socket } = this.props;
    socket.emit('MESSAGE_SENT', { chatId, message });
  }

  sendTyping(chatId, isTyping) {
    const { socket } = this.props;
    socket.emit('TYPING', { chatId, isTyping });
  }

  render() {
    const { user, logout } = this.props;
    const { chats, activeChat } = this.state;
    return (
      <div className="container">
        <SideBar
          logout={logout}
          chats={chats}
          user={user}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
        />
        <div className="chat-room-container">
          {activeChat !== null ? (
            <div className="chat-room">
              <ChatHeading name={activeChat.name} />
              <Messages
                messages={activeChat.messages}
                user={user}
                typingUsers={activeChat.typingUsers}
              />
              <MessageInput
                sendMessage={message => {
                  this.sendMessage(activeChat.id, message);
                }}
                sendTyping={isTyping => {
                  this.sendTyping(activeChat.id, isTyping);
                }}
              />
            </div>
          ) : (
            <div className="chat-room choose">
              <h3>Choose a chat!</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
