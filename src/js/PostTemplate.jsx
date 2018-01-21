import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.5px solid black;
  margin: 0;
  width: 100%;
  button {
    cursor: pointer;
  }
`;

const p = {
  Buyer: "Sell",
  Seller: "Buy"
};

const posts = props => (
  <DivContainer>
    <div>
      <h4>{props.post.user_name}</h4>
    </div>
    <div>
      <h4>{props.post.preferedPaymentMethod}</h4>
    </div>
    <div>
      <h4>{props.post.country}</h4> <h5>{props.post.city}</h5>
    </div>
    <div>
      <h4>{props.post.coin}</h4> <h5>{props.post.amount} - QTY</h5>
    </div>
    <div>
      <Link to="/chat">
        <button>
          {props.post.price} <br />
          {p[props.post.buyerSeller]}
        </button>
      </Link>
    </div>
  </DivContainer>
);

export default posts;
