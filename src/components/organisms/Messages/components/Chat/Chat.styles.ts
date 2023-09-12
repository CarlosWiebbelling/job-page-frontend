import { styled } from "styled-components";

const ChatContainer = styled.div`
  position: absolute;
  border: 1px solid #dbdbff;
  right: 3rem;
  bottom: 10rem;
  width: 25%;
`;

const Header = styled.div`
  height: 2rem;
  display: flex;
  max-width: 270px;
  background-color: #c3f0ff;
  padding: 0.25rem 0.5rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  height: 1.25rem;
`;

const Content = styled.div`
  height: 250px;
  overflow: auto;
`;

const Footer = styled.div`
  justify-content: space-between;
  padding: 0.25rem 0;
  display: flex;
`;

const SendIcon = styled.img`
  cursor: pointer;
  height: 2rem;
`;

const Input = styled.input`
  width: 100%;
`;

export {
  ChatContainer,
  Header,
  CloseIcon,
  Content,
  Input,
  SendIcon,
  Footer
}
