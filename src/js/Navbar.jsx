import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
  li,
  a {
    float: right;
    margin: 0 auto;
    font-family: "ubuntu";
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
    font-family: "ubuntu";
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
    axios
      .get("/api/username")
      .then(response => {
        this.setState({ username: response });
      })
      .catch(err => {
        console.log("err => ", err);
      });
  }
  render() {
    return (
      <div>
        <div className="Navbar-desktop">
          <div className="Navbar-desktop-user">
            <NavbarDesktopUser>
              <li>chat</li>
              <li>wallet</li>
              <Link to="/user">user</Link>
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
export default Navbar;
