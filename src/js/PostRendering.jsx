import React, { Component } from 'react';
import PostTemplate from './PostTemplate';
import styled from 'styled-components';
import axios from 'axios';

const AllPostsContainer = styled.div`
  width: 70%;
  box-shadow: 7px 6px #dad5cb;
  border: 1px solid black;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 700px) {
    width: 95%;
    padding: 0 4px;
  }
`;

class BuildPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }
  componentDidMount() {
    if (!this.state.posts) {
      axios
        .get('/api/posts')
        .then(response => {
          this.setState({ posts: response.data });
        })
        .catch(err => <h1>Server Problem!</h1>);
    }
  }

  render() {
    if (this.state.posts) {
      return (
        <AllPostsContainer>
          {this.state.posts.map(post => {
            if (this.props.page == post.buyerseller) {
              return <PostTemplate key={post.post_id} post={post} />;
            }
          })}
        </AllPostsContainer>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
}

export default BuildPosts;
