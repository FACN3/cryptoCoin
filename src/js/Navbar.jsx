import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarDesktopLinks = styled.ul`
  list-style-type: none;
  margin: 0;
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
`;
const NavbarDesktopUser = styled.div`
  list-style-type: none;
  margin: 0;
  margin-bottom: 1px;
  padding: 3px 30px;
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

const Navbar = props => (
  <div>
    <div className="Navbar-desktop">
      <div className="Navbar-desktop-user">
        <NavbarDesktopUser>
          <li>
            <a> chat</a>
          </li>
          <li>
            <a> wallet</a>
          </li>
          <li>
            <a>user</a>
          </li>
        </NavbarDesktopUser>
      </div>
      <div className="Navbar-desktop-links">
        <NavbarDesktopLinks>
          <h2>CryptoCoin</h2>
          <li>
            <Link to="/sell">
              <a>SELL</a>
            </Link>
          </li>
          <li>
            <Link to="/buy">
              <a>BUY</a>
            </Link>
          </li>
          <li>
            <Link to="/markets">
              <a>MARKETS</a>
            </Link>
          </li>
          <li>
            <Link to="/learn">
              <a>LEARN</a>
            </Link>
          </li>
        </NavbarDesktopLinks>
      </div>
    </div>
    <div className="Navbar-mobile-navbar">
      <h3>thisis a mobile navbar</h3>
    </div>
  </div>
);

export default Navbar;
