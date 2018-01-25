import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import MarketData from './MarketData';
import { setAuthenticated } from './actionCreators';

const Wrapper = styled.div`
  background-color: #2f9999;
  color: white;
`;

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
    text-decoration: none;
    color: #fff;
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
  padding: 20px 10px;
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
class Landing extends Component {
  componentDidMount() {
    this.props.handleBeginJourney();
  }
  render() {
    const landingRedirect = this.props.authenticated ? '/learn' : '/login';
    return (
      <Wrapper>
        <div>
          <div className="landing-navbar">
            <LandingNavbar>
              <h2>CryptoCoin</h2>
              <Link to="/login"> Sign In</Link>
              <Link to="/signup"> Sign Up </Link>
            </LandingNavbar>
          </div>
          <LandingHeader className="landing-header">
            <h1>
              GET INTO CRYPTOCURRENCIES <br /> TODAY
            </h1>
            <Link to={landingRedirect}>
              <button type="" onSubmit={this.props.handleBeginJourney}>
                Begin your journey
              </button>
            </Link>
          </LandingHeader>
          <LandingGraph className="landing-graph container-fluid">
            <MarketData />
          </LandingGraph>
          <LandingSafety className="landing-safety">
            <h2>SAFELY MAKE YOUR FIRST TRADE</h2>
            <p>
              learn how to buy cryptocurrency, which coin to invest in, all in
              one place.{' '}
            </p>
          </LandingSafety>

          <LandingFooter className="landing-footer">
            Contact Us Security Help
          </LandingFooter>
        </div>
      </Wrapper>
    );
  }
}
const mapStatetoProps = state => ({
  authenticated: state.authenticated
  // landingRedirect: state.landingRedirect
});
const mapDispatchtoProps = dispatch => ({
  handleBeginJourney() {
    axios.get('/api/authenticated').then(result => {
      dispatch(setAuthenticated(result.data));
    });
  }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(Landing);
