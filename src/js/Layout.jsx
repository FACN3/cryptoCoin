import React, { Component } from 'react';
import io from 'socket.io-client';
import LoginForm from './LoginForm';
import ChatContainer from './ChatContainer';

const socketUrl = 'http://localhost:8080';
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };

    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.initSocket = this.initSocket.bind(this);
  }

  componentWillMount() {
    this.initSocket();
  }
  setUser(user) {
    const { socket } = this.state;
    socket.emit('USER_CONNECTED', user);
    this.setState({ user });
  }

  initSocket() {
    const socket = io(socketUrl);

    socket.on('connect');

    this.setState({ socket });
  }

  logout() {
    const { socket } = this.state;
    socket.emit('LOGOUT');
    this.setState({ user: null });
  }

  render() {
    const { title } = this.props;
    const { socket, user } = this.state;
    return (
      <div className="container">
        {!user ? (
          <LoginForm socket={socket} setUser={this.setUser} />
        ) : (
          <ChatContainer socket={socket} user={user} logout={this.logout} />
        )}
      </div>
    );
  }
}

export default Layout;
