import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

const LandingNavbar = styled.div`
  a {
    float: right;
    margin: 5px;
    font-weight: bolder;
    text-decoration: none;
    color: #fff;
  }
  font-family: Roboto;
`;

const LoginDiv = styled.div`
  /* Demo 3 */

  .form-3 {
    font-family: 'Ubuntu', 'Lato', sans-serif;
    font-weight: 400;
    /* Size and position */
    width: 300px;
    position: relative;
    margin: 60px auto 30px;
    padding: 10px;
    overflow: hidden;

    /* Styles */
    background: #111;
    border-radius: 0.4em;
    border: 1px solid #191919;
    box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.08),
      0 16px 10px -8px rgba(0, 0, 0, 0.6);
  }

  .form-3 label {
    /* Size and position */
    width: 50%;
    float: left;
    padding-top: 9px;

    /* Styles */
    color: #ddd;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 1px 0 #000;
    text-indent: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  .form-3 input[type='text'],
  .form-3 input[type='password'] {
    /* Size and position */
    width: 50%;
    float: left;
    padding: 8px 5px;
    margin-bottom: 10px;
    font-size: 12px;

    /* Styles */
    background: #1f2124; /* Fallback */
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(#1f2124),
      to(#27292c)
    );
    background: -webkit-linear-gradient(#1f2124, #27292c);
    background: linear-gradient(#1f2124, #27292c);
    border: 1px solid #000;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    border-radius: 3px;

    /* Font styles */
    font-family: 'Ubuntu', 'Lato', sans-serif;
    color: #fff;
  }

  .form-3 input[type='text']:hover,
  .form-3 input[type='password']:hover,
  .form-3 label:hover ~ input[type='text'],
  .form-3 label:hover ~ input[type='password'] {
    background: #27292c;
  }

  .form-3 input[type='text']:focus,
  .form-3 input[type='password']:focus {
    box-shadow: inset 0 0 2px #000;
    background: #494d54;
    border-color: #51cbee;
    outline: none; /* Remove Chrome outline */
  }

  .form-3 p:nth-child(3),
  .form-3 p:nth-child(4) {
    float: left;
    width: 50%;
  }

  .form-3 label[for='remember'] {
    width: auto;
    float: none;
    display: inline-block;
    text-transform: capitalize;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0px;
    text-indent: 2px;
  }

  .form-3 input[type='checkbox'] {
    margin-left: 10px;
    vertical-align: middle;
  }

  .form-3 input[type='submit'] {
    /* Width and position */
    width: 100%;
    padding: 8px 5px;

    /* Styles */
    border: 1px solid #0273dd; /* Fallback */
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 10px 10px rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    background: #38a6f0;
    cursor: pointer;

    /* Font styles */
    font-family: 'Ubuntu', 'Lato', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 15px;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
  }

  .form-3 input[type='submit']:hover {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }

  .form-3 input[type='submit']:active {
    background: #287db5;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.6);
    border-color: #000; /* Fallback */
    border-color: rgba(0, 0, 0, 0.9);
  }

  .no-boxshadow .form-3 input[type='submit']:hover {
    background: #2a92d8;
  }

  .form-3:after {
    /* Size and position */
    content: '';
    height: 1px;
    width: 33%;
    position: absolute;
    left: 20%;
    top: 0;

    background: -webkit-gradient(
      linear,
      0 0,
      100% 0,
      from(transparent),
      color-stop(0.25, #444),
      color-stop(0.5, #b6b6b8),
      color-stop(0.75, #444),
      to(transparent)
    );
    background: -webkit-linear-gradient(
      left,
      transparent,
      #444,
      #b6b6b8,
      #444,
      transparent
    );
    background: linear-gradient(
      left,
      transparent,
      #444,
      #b6b6b8,
      #444,
      transparent
    );
  }

  .form-3:before {
    /* Size and position */
    content: '';
    width: 8px;
    height: 5px;
    position: absolute;
    left: 34%;
    top: -7px;

    /* Styles */
    border-radius: 50%;
    box-shadow: 0 0 6px 4px #fff;
  }

  .form-3 p:nth-child(1):before {
    /* Size and position */
    content: '';
    width: 250px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 45px;

    /* Styles */
    -webkit-transform: rotate(75deg);
    transform: rotate(75deg);

    background: -webkit-linear-gradient(
      50deg,
      rgba(255, 255, 255, 0.15),
      rgba(0, 0, 0, 0)
    );
    background: linear-gradient(
      50deg,
      rgba(255, 255, 255, 0.15),
      rgba(0, 0, 0, 0)
    );
    pointer-events: none;
  }

  .no-pointerevents .form-3 p:nth-child(1):before {
    display: none;
  }
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidInput: null,
      loggedin: false,
      username: null,
      password: null
    };

    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    const { password } = this.state;
    axios.post('/api/login', { username, password }).then(response => {
      if (response.status == 500) {
        this.setState({ invalidInput: 'oooops Server error' });
      } else if (response.status == 200) {
        if (response.data == '') {
          this.setState({ loggedin: true });
        } else {
          this.setState({ invalidInput: response.data });
        }
      }
    });
  }
  handleUser(e) {
    this.setState({ username: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.loggedin) {
      return <Redirect to="/learn" />;
    } else {
      return (
        <div>
          <LoginDiv>
            <form
              onSubmit={this.handleSubmit}
              action="/api/login"
              method="POST"
              className="form-3"
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={this.handleUser}
                placeholder="Username"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handlePassword}
                id="password"
                placeholder="Password"
                required
              />
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>

              <input
                type="submit"
                id="submitButton"
                name="submit"
                value="Sign in"
              />
              <label>
                {this.state.invalidInput ? this.state.invalidInput : ''}
              </label>
            </form>
          </LoginDiv>
        </div>
      );
    }
  }
}

export default LoginPage;
