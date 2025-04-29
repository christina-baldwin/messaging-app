import styled from "styled-components";
import Message from "./components/Message";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Messages = (props) => {
  return (
    <MessagesContainer>
      {props.messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </MessagesContainer>
  );
};

export default Messages;
