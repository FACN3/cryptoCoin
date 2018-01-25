import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
`;
class postForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postToUpdate: this.props.post
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (this.state.postToUpdate != null) {
      const obj = this.state.postToUpdate;
      obj[event.target.name] = event.target.value;
      this.setState({ postToUpdate: obj });
    }
  }
  render() {
    return (
      <form
        action={this.state.postToUpdate ? "/api/updatePost" : "/api/addPost"}
        method="POST"
      >
        <div>
          <label>I wanna</label>
          <select
            name="buyerSeller"
            value={
              this.state.postToUpdate && this.state.postToUpdate.buyerSeller
            }
            onChange={this.handleChange}
          >
            <option>Buy</option>
            <option>Sell</option>
          </select>
        </div>
        <Wrapper>
          <input name="postId" value={this.props.postId} />
        </Wrapper>
        <div>
          <label>Coin</label>
          <input
            type="text"
            placeholder="BTC/ETH..."
            name="coin"
            value={this.state.postToUpdate && this.state.postToUpdate.coin}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="text"
            placeholder="ente a number"
            name="qty"
            value={this.state.postToUpdate && this.state.postToUpdate.qty}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            placeholder="enter a number"
            name="price"
            value={this.state.postToUpdate && this.state.postToUpdate.price}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Prefferedpayment</label>
          <select
            name="prefferedpayment"
            value={
              this.state.postToUpdate &&
              this.state.postToUpdate.prefferedPayment
            }
            onChange={this.handleChange}
          >
            <option>Bank Transfer</option>
            <option>In Person</option>
          </select>
        </div>
        <input
          type="submit"
          value={this.state.postToUpdate ? "Update" : "Post"}
        />
      </form>
    );
  }
}
export default postForm;
