import React from "react";
import Navbar from "./Navbar";
import PostRendering from "./PostRendering";
import styled from "styled-components";

const SellHeader = styled.h2`
  text-align: center;
`;
const SellSubheader = styled.h3`
  text-align: center;
`;

const Sell = () => (
  <div>
    <Navbar />
    <SellHeader>Strength In Numbers</SellHeader>
    <SellSubheader> Sell CryptoCoins to these buyers </SellSubheader>
    <PostRendering page="Buyer" />
  </div>
);

export default Sell;
