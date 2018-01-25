import React from 'react';
import styled from "styled-components";
import {Link, Redirect} from "react-router-dom";
import Navbar from './Navbar';
import axios from 'axios';
import PostTemplate from './PostTemplate';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      img: null,
      posts: null
    }
  }
  componentDidMount() {
    axios.get('/api/userPosts').then(response => {
      this.setState({posts: response})
    })
  }
  render() {
    return (<div>
      <Navbar />
      <div>
        <div>
          <img src={this.state.img}/>
          <h2>{this.state.username}</h2>
        </div>
        <div>{
            this.state.posts
              ? (this.state.posts.map(post => {
                return <PostTemplate key={post.post_id} post={post}/>;
              })):""
          }</div>
      </div>
    </div>)
  }
}

export default UserPage;
