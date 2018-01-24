import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import PostRendering from './PostRendering';

const BuyHeader = styled.h2`
  text-align: center;
`;
const BuySubheader = styled.h3`
  text-align: center;
`;

const Buy = () => (
  <div>
    <Navbar />
    <BuyHeader>Strength In Numbers</BuyHeader>
    <BuySubheader>Buy CryptoCoins from these sellers</BuySubheader>
    <PostRendering page="Seller" />
  </div>
);

export default Buy;
