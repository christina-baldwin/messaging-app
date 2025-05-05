import styled from "styled-components";
import Message from "./Message";

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Messages = (props) => {
  return (
    <MessagesContainer>
      {props.messages
        .slice(0)
        .reverse()
        .map((message, index) => {
          return (
            <Message
              key={index}
              message={message.message}
              time={message.time}
            />
          );
        })}
    </MessagesContainer>
  );
};

export default Messages;
