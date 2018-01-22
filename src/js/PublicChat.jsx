import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Press Start 2P';
  }
  #container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'sidebar main';
    width: 100vw;
    height: 100vh;
  }
  #main {
    grid-area: main;
  }
  #new-message {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 5px;
    margin-left: 0px;
    border-top: 1px solid #3f3f3f;
  }
  #messages-list {
    padding: 5px 0 0 5px;
  }
  #sidebar {
    grid-area: sidebar;
    padding: 5px 0 0 5px;
    border-right: 1px solid #3f3f3f;
    height: 100%;
  }
`;

const PublicChat = () => (
  <div>
    <Navbar />

    <h1>this is the public chat page </h1>
    <h2>hello</h2>
    <Wrapper />
  </div>
);

export default PublicChat;
