import React from "react";
import Navbar from "./Navbar";
import PostRendering from "./PostRendering";
import styled from "styled-components";


const BuyHeader = styled.h2 `
  text-align: center;
`;
const BuySubheader = styled.h3 `
  text-align: center;
`;

const Buy = () => (<div>
      <Navbar/>
      <BuyHeader>Strength In Numbers</BuyHeader>
      <BuySubheader>
        Buy CryptoCoins from these sellers
      </BuySubheader>
      <PostRendering page="Seller"/>
    </div>)




export default Buy;
