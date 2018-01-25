import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: '',
      error: ''
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser({ user, isUser }) {
    if (isUser) {
      this.setError('User name taken');
    } else {
      this.props.setUser(user);
      this.setError('');
    }
  }

  setError(error) {
    this.setState({ error });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { socket } = this.props;
    const { nickname } = this.state;
    socket.emit('VERIFY_USER', nickname, this.setUser);
  }

  handleChange(e) {
    this.setState({ nickname: e.target.value });
  }

  render() {
    const { nickname, error } = this.state;
    return (
      <div className="login">
        <form
          onSubmit={(e, props) => this.handleSubmit(e, props)}
          className="login-form"
        >
          <label htmlFor="nickname">
            <h2>Enter your nickname</h2>
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={e => this.handleChange(e)}
            placeholder="insert username"
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
