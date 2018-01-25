import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import PostTemplate from "./PostTemplate";
import PostForm from "./PostForm";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  img {
    border-radius: 50%;
    width: 20%;
    height: auto;
    margin-top: 2%;
  }
  .addButton {
    width: 40%;
  }
  h2 {
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
`;

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      username: null,
      img: null,
      value: "Place the deal your looking for"
    };

    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentDidMount() {
    axios.get("/api/userPosts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  toggleAdd(event) {
    const x = event.target.textContent;
    if (x === "Place the deal your looking for") {
      this.setState({ add: true, value: "Cancel" });
    } else {
      this.setState({ add: false, value: "Place the deal your looking for" });
    }
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <div>
          <div>
            <img src="https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png" />
            <h2>{this.state.username}</h2>
          </div>
          <button
            id="toggleButton"
            className="addButton"
            onClick={this.toggleAdd}
          >
            {this.state.value}
          </button>
          {this.state.value === "Cancel" ? <PostForm /> : ""}
          <div>
            {this.state.posts
              ? this.state.posts.map(post => {
                  return <PostTemplate key={post.post_id} post={post} />;
                })
              : ""}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default UserPage;
