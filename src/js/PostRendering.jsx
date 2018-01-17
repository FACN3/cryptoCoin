import React from "react";
import posts from "../../database/posts.json";
import PostTemplate from "./PostTemplate";
import styled from "styled-components";

const AllPostsContainer = styled.div`
  width: 70%;
  box-shadow: 7px 6px #dad5cb;
  border: 1px solid black;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;

  @media (max-width: 700px) {
    width: 95%;
    padding: 0 4px;
  }
`;

const buildPosts = props => (
  <AllPostsContainer>
    {posts.map(post => {
      if (props.page == post.buyerSeller) {
        return <PostTemplate post={post} />;
      }
    })}
  </AllPostsContainer>
);

export default buildPosts;
