import React, { Component } from 'react';

export default class Messages extends Component {
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this);
  }
  componentDidMount() {
    this.scrollDown();
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  scrollDown() {
    const { container } = this.refs;
    container.scrollTop = container.scrollHeight;
  }

  render() {
    const { messages, user, typingUsers } = this.props;
    return (
      <div ref="container" className="thread-container">
        <div className="thread">
          {messages.map(mes => (
            <div
              key={mes.id}
              className={`message-container ${mes.sender === user.name &&
                'right'}`}
            >
              <div className="time">{mes.time}</div>
              <div className="data">
                <div className="message">{mes.message}</div>
                <div className="name">{mes.sender}</div>
              </div>
            </div>
          ))}
          {typingUsers.map(name => (
            <div key={name} className="typing-user">
              {`${name} is typing . . .`}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
