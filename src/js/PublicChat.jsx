import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Layout from './Layout';

const Wrapper = styled.div`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
  }

  input,
  textarea {
    font-family: Arial;
  }

  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .login-form input {
    max-width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    border-bottom: solid 2px #b3b2ca;
    transition: all 0.23s ease-in;
  }

  .login-form input:focus {
    border-bottom: solid 2px black;
    outline: none;
  }

  .login-form .error {
    text-align: center;
    margin: 5px 0;
    padding: 5px 10px;
    color: #c92c43;
  }

  .container {
    padding-bottom: 10vh;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 90%;
    width: 90%;
  }

  #side-bar {
    order: 1;
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  #side-bar .heading {
    font-size: 1em;
    box-sizing: border-box;
    height: 8vh;
    max-height: 65px;
    padding: 18px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #2f9999;
  }

  #side-bar .search {
    background: #2f9999;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 1px 0;
    border-style: solid;
    border-color: black;
    padding-left: 15px;
    padding-right: 20px;
    height: 10vh;
    max-height: 65px;
  }

  #side-bar .search .search-icon {
    margin-right: 15px;
    cursor: pointer;
  }

  #side-bar .search input {
    width: 100%;
    background: #2f9999;
    flex-grow: 1;
    box-sizing: border-box;
    border: none;
    color: #2f9999;
  }

  #side-bar .search input:focus {
    outline: none;
  }

  #side-bar .search input::placeholder {
    color: #2f9999;
    opacity: 0.6;
  }

  #side-bar .search .plus {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 13px;
    height: 13px;
  }

  #side-bar .search .plus::after,
  #side-bar .search .plus::before {
    content: '';
    position: absolute;
    background: #b3b2ca;
  }

  #side-bar .search .plus::after {
    width: 16px;
    height: 2px;
    top: 5px;
  }

  #side-bar .search .plus::before {
    width: 2px;
    height: 16px;
    top: -2px;
    left: 7px;
  }

  #side-bar .users {
    ${'' /* overflow-y: scroll; */} background: #2f9999;
    flex-grow: 1;
    text-align: center;
    height: 4.5vh;
    max-height: 65px;
    padding: 18px 5px;
  }

  #side-bar .users::-webkit-scrollbar-track {
    background-color:  #484d79;
  }

  #side-bar .users::-webkit-scrollbar {
    width: 5px;
    background-color: green;
  }

  #side-bar .users::-webkit-scrollbar-thumb {
    background-color: #2f9999;
  }

  #side-bar .users .user {
    align-items: center;
    display: flex;
    height: 66px;
    justify-content: flex-start;
    padding: 18px 16px;
  }

  #side-bar .users .user.active,
  #side-bar .users .user:hover {
    background: #2f9999;
  }

  #side-bar .users .user:hover:not(.active) {
    cursor: pointer;
  }

  #side-bar .users .user .user-info {
    margin-left: 15px;
    flex-grow: 1;
  }

  #side-bar .users .user .user-info .last-message {
    font-size: 12px;
    opacity: 0.56;
  }

  #side-bar .users .user .new-message {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #side-bar .current-user {
    align-items: center;
    background: #fff;
    color: #fc4a1a;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 10vh;
    max-height: 65px;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
  }

  #side-bar .current-user .logout {
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 2em;
  }

  .chat-header {
    border-radius: 15px 0 0 0;
    background: #2f9999;
    box-shadow: 0px 6px 5px -2px rgba(225, 225, 225, 0.7);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    max-height: 65px;
    padding: 18px 16px;
  }

  .chat-header .user-info {
    align-items: center;
    display: flex;
  }

  .chat-header .user-info .user-name {
    margin-right: 10px;
  }

  .chat-header .user-info .status {
    align-items: center;
    display: flex;
  }

  .chat-header .options {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    width: 15%;
  }

  .chat-header .options svg {
    cursor: pointer;
  }

  .chat-room-container {
    height: 100%;
    width: 76.25%;
  }

  @media screen and (max-width: 510px) {
    #side-bar {
      position: absolute;
      left: -100%;
    }
    .chat-room-container {
      width: 100%;
    }
  }

  .chat-room {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .chat-room.choose {
    align-items: center;
    justify-content: center;
    font-size: 2em;
  }

  .thread-container {
    height: 90vh;
    overflow: scroll;
    flex-grow: 1;
    overflow-y: scroll;
    position: relative;
  }

  .thread-container::-webkit-scrollbar-track {
    background-color:  #2f9999;
  }

  .thread-container::-webkit-scrollbar {
    width: 5px;
    background-color: #2f9999;
  }

  .thread-container::-webkit-scrollbar-thumb {
    background-color: #2f9999;
  }

  .thread-container .thread {
    position: relative;
    width: 100%;
    min-height: 89vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #ffffff;
    background: #ffffff;
  }

  .message-container {
    display: flex;
    justify-content: flex-start;
    min-height: 50px;
    margin: 10px 15px;
    animation: 0.65s ease-out 0s show;
  }

  .message-container .time {
    order: 1;
  }

  .message-container .data {
    order: 2;
    height: 100%;
    margin-left: 25px;
  }

  .message-container .name {
    color:#FC4A1A;
    font-size: 0.65em;
    margin-top: 5px;
    text-align: right;
  }

  .message-container .message {
    border-style: solid;
    border-color:#b3b2ca;
    background: #fff;
    border-radius: 5px;
    border-top-left-radius: 0;
    box-sizing: border-box;
    color: #FC4A1A;
    height: 100%;
    padding: 10px 15px;
    position: relative;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${
    '' /* .message-container .message::before {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: #2f9999;
    border-style: solid;
    border-top-color: #2f9999;
    border-width: 4px;
    content: '';
    height: 0;
    left: -7px;
    position: absolute;
    top: 0;
    width: 0;
  } */
  }

  .message-container.right {
    text-align: right;
    justify-content: flex-end;
  }

  .message-container.right .time {
    order: 2;
    margin-left: 25px;
  }

  .message-container.right .data {
    margin-left: 0;
    order: 1;
  }

  .message-container.right .name {
    display: none;
  }

  .message-container.right .message {
    border-style:none;
    background: #2f9999;
    color: #fff;
    border-top-right-radius: 0;
    border-top-left-radius: 5px;
  }

  ${
    '' /* .message-container.right .message::before {
    ${'' /* border-top-color: #2f999; */
  }
    ${'' /* border-left-color: #2f999; */}
    ${'' /* border-right-color: transparent; */}
    left: auto;
    right: -7px;
  } */}

  .typing-user {
    text-align: right;
    margin: 10px 15px;
  }

  .message-input {
    border-radius: 0 0 15px 15px;

    padding: 10px;
    background: white;
    color: #484d79;
    box-sizing: border-box;
    height: 15vh;
    max-height: 65px;
  }

  .message-input .message-form {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .message-input .message-form .form-control {
    border-radius: 0 0 0 10px;

    padding-top: 24px;
    padding-bottom: 24px;
    resize: none;
    padding-left: 15px;
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    border: none;
  }

  .message-input .message-form .form-control::-webkit-scrollbar-track {

    background-color: #484d79;
  }

  .message-input .message-form .form-control::-webkit-scrollbar {
    width: 5px;
    background-color: #2f9999;
  }

  .message-input .message-form .form-control::-webkit-scrollbar-thumb {
    background-color: #2f9999;
  }

  .message-input .message-form .form-control:focus {
    outline: none;
  }

  .message-input .message-form .send {
    box-sizing: border-box;
    font-size: 1.25em;
    text-align: center;
    border: none;
    height: 100%;
    color: #fff;
    background: #f7b733;
    transition: all 0.35s ease-out;
  }

  .message-input .message-form .send:disabled {
    opacity: 0.2;
    background: #5d5d8a;
  }
`;

const PublicChat = () => (
  <div>
    <Navbar />

    <h1>this is the public chat page </h1>
    <h2>hello</h2>
    <div>
      <Wrapper>
        <Layout />
      </Wrapper>
    </div>
  </div>
);

export default PublicChat;
