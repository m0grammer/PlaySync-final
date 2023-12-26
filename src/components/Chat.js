import React, { useRef } from 'react';
import ChatIco from '../assets/img/chat.png';
import PlusChat from '../assets/img/plus-chat.png';

const Chat = () => {
  return (
    <>
        <a class="chat" 
                ><img style={{width: '80px',cursor: 'pointer'}} src={ChatIco} alt=""
            /></a>
            <div class="chat-text disable">
                <h1>PlaySync GPT</h1>
                <div class="chat-text-input">
                    <input type="text" name="" id="" />
                    <a href="#" ><img src={PlusChat} alt="" /></a>
                </div>
            </div>
    </>
  );
};

export default Chat;
