import { useState, type ReactElement, useEffect } from 'react';

import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";

import {
  ChatContainer,
  CloseIcon,
  Content,
  Footer,
  Header,
  Input,
  SendIcon
} from './Chat.styles';

import type { ChatProps } from './types';

const Chat = (props: ChatProps): ReactElement => {
  const {
    onClose
  } = props;

  const [ioInstance, setIoInstance] = useState<Socket<any> | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [history, setHistory]  = useState<Array<string> | null>(null);

  useEffect(() => {
    const socket = io("ws://localhost:3300");

    socket.on('load-messages', (data) => setHistory(data));

    setIoInstance(socket);
  }, []);

  const sendMessage = () => {    
    if (!ioInstance) {
      return;
    }

    ioInstance.emit('new-message', message);

    setMessage('');
  }

  return (
    <ChatContainer>
      <Header onClick={onClose}>
        Chat
        <CloseIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz85hzTu-s2ggnUSl3LvdF6INiIZy-MWylRQ&usqp=CAU" />
      </Header>
      <Content>
        {(history || []).map((item, index) => <p key={index}>{item}</p>)}
      </Content>

      <Footer>
        <Input
          type='text'
          onChange={(event) => setMessage(event.target.value)}
          value={message ?? ''}
        />
        <SendIcon
          onClick={sendMessage}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmddFY6ErGAUSNxDENnjtT9tmrq8R0J9SdQ&usqp=CAU"
        />
      </Footer>
    </ChatContainer>
  )
}

export default Chat;
