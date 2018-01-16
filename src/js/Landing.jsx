import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #2f9999;
  color: white;
`;
// const Body = styled.body`
//   background-color: #2f9999;
// `;
const LandingNavbar = styled.div`
  h2 {
    float: left;
    margin: 2px;
    font-weight: normal;
  }
  a {
    float: right;
    margin: 5px;
    font-weight: bolder;
  }
  font-family: Roboto;
`;

const LandingHeader = styled.div`
  text-align: center;
  word-wrap: break-word;
  padding-top: 50px;
  padding-bottom: 10vh;
  font-family: 'Questrial';
  font-size: 150%;
  button {
    ${'' /* font-family: "Questrial";
    font-weight: bold;
    font-size: 100%;
    background-color: #f7b733;
    border-radius: 100px;
    border: none;
    color: white;
    padding: 15px 40px; */};
  }
  button:hover:not(.active) {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 80%;
    }
  }
`;
const LandingGraph = styled.div`
  background-color: #f0ebe1;
  text-align: center;

  select {
    font-family: 'Questrial';
    font-weight: bold;
    font-size: 120%;
    background-color: #f7b733;
    border-radius: 100px;
    border: none;
    color: white;
    padding: 15px 40px;
  }
`;
const LandingSafety = styled.div`
  padding: 10vh;
  text-align: center;
  font-family: 'Quicksand';

  h2 {
    font-weight: 100;
  }
`;

const LandingFooter = styled.div`
  float: right;
`;

const Landing = () => (
  <Wrapper>
    <div>
      <div className="landing-navbar">
        <LandingNavbar>
          <h2>CryptoCoin</h2>
          <a> sign in</a>
          <a> sign up </a>
        </LandingNavbar>
      </div>
      <LandingHeader className="landing-header">
        <h1>
          GET INTO CRYPTOCURRENCIES <br /> TODAY
        </h1>
        <Link to="/learn">
          <button type="">Begin your journey</button>
        </Link>
      </LandingHeader>
      <LandingGraph className="landing-graph container-fluid">
        <h2>Graph placeHolder</h2>
        <br />
        <select>
          <option>Bitcoin</option>
          <option>Ethereum</option>
          <option>Litecoin</option>
        </select>
      </LandingGraph>
      <LandingSafety className="landing-safety">
        <h2>SAFELY MAKE YOUR FIRST TRADE</h2>
        <p>
          learn how to buy cryptocurrency, which coin to invest in, all in one
          place.{' '}
        </p>
      </LandingSafety>

      <LandingFooter className="landing-footer">
        Contact Us Security Help
      </LandingFooter>
    </div>
  </Wrapper>
);

export default Landing;
