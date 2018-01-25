import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUsername } from './actionCreators';

const NavbarDesktopUser = styled.div`
  z-index: 1;
  position: fixed;
  list-style-type: none;
  width: -webkit-fill-available;
  margin: 0;
  margin-bottom: 1px;
  padding: 3px 30px;
  overflow: hidden;
  background-color: #2f9999;
  top: 0;
  h2 {
    float: left;
    color: white;
    margin: 0;
  }
  li {
    float: right;
    margin: 0 auto;
    font-family: 'ubuntu';
    display: block;
    color: #f7b733;
    text-align: center;
    padding: 0 16px;
    text-decoration: none;
    align-self: center;
  }

  li a:hover:not(.active) {
    cursor: pointer;
  }
`;

const NavbarDesktopLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-top: 25px;
  margin-bottom: 1px;
  padding: 20px 20px;
  overflow: hidden;
  background-color: #2f9999;

  li {
    float: right;
    margin: 0 auto;
  }
  h2 {
    float: left;
    color: white;
    margin: 0;
  }
  li a {
    font-family: 'ubuntu';
    display: block;
    color: white;
    text-align: center;
    padding: 0 16px;
    text-decoration: none;
    align-self: center;
  }

  li a:hover:not(.active) {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavbarMobileNavbar = styled.ul`
  position: fixed;
  list-style-type: none;
  margin: 0;
  width: -webkit-fill-available;
  margin-bottom: 1px;
  padding: 20px 20px;
  overflow: hidden;
  background-color: #f0ebe1;
  text-align: center;
  display: flex;
  padding: 2vh 10vw;
  li {
    margin: 0 auto;
  }

  li a {
    text-decoration: none;
    color: #2f9999;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }
  componentDidMount() {
    this.props.handleUsername();
  }
  render() {
    const { username } = this.props;
    return (
      <div>
        <div className="Navbar-desktop">
          <div className="Navbar-desktop-user">
            <NavbarDesktopUser>
              <Link to="/publicChat">
                <li>chat</li>
              </Link>
              <li>wallet</li>
              <li>{username}</li>
            </NavbarDesktopUser>
          </div>
          <div className="Navbar-desktop-links">
            <NavbarDesktopLinks>
              <h2>CryptoCoin</h2>
              <li>
                <Link to="/sell">SELL</Link>
              </li>
              <li>
                <Link to="/buy">BUY</Link>
              </li>
              <li>
                <Link to="/markets">MARKETS</Link>
              </li>
              <li>
                <Link to="/learn">LEARN</Link>
              </li>
            </NavbarDesktopLinks>
            <NavbarMobileNavbar>
              <h2>CryptoCoin</h2>
              <li>
                <Link to="/sell">SELL</Link>
              </li>
              <li>
                <Link to="/buy">BUY</Link>
              </li>
              <li>
                <Link to="/markets">MARKETS</Link>
              </li>
              <li>
                <Link to="/learn">LEARN</Link>
              </li>
            </NavbarMobileNavbar>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username
});
const mapDispatchToProps = dispatch => ({
  handleUsername() {
    console.log('peepee');
    axios
      .get('/api/username')
      .then(response => {
        dispatch(setUsername(response.data));
      })
      .catch(err => {
        console.log('err => ', err);
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
