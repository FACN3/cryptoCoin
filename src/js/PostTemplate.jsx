import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import PostForm from "./PostForm";
import axios from "axios";

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
  .buttonsDiv {
    display: flex;
    flex-direction: column;
  }
  .noButtons {
    display: none;
  }
`;

const p = {
  Buyer: "Sell",
  Seller: "Buy"
};

class posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      deleted: 0
    };
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update() {
    this.setState({ updating: true });
  }
  delete() {
    axios.post("/api/deletePost", this.props.post);
  }

  render() {
    if (this.state.updating) {
      return <PostForm post={this.props.post} postId={this.props.postId} />;
    } else {
      return (
        <DivContainer>
          <div
            className={
              this.props.user == this.props.post.username
                ? "buttonsDiv"
                : "buttonsDiv noButtons"
            }
          >
            <button id="updateButton" onClick={this.update}>
              update
            </button>
            <button id="deleteButton" onClick={this.delete}>
              delete
            </button>
          </div>
          <div>
            <h4>{this.props.post.username}</h4>
          </div>
          <div>
            <h4>{this.props.post.prefferedpayment}</h4>
          </div>
          <div>
            <h4>{this.props.post.country}</h4>
            <h5>{this.props.post.city}</h5>
          </div>
          <div>
            <h4>{this.props.post.coin}</h4>
            <h5>
              {this.props.post.qty}
              - QTY
            </h5>
          </div>
          <div>
            <Link to="/chat">
              <button>
                {this.props.post.price}
                <br /> {p[this.props.post.buyerseller]}
              </button>
            </Link>
          </div>
        </DivContainer>
      );
    }
  }
}

export default posts;
