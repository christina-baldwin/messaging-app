import React, { useState } from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
  width: 300px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border: solid black 1px;
  background-color: white;
  padding: 1rem;
  box-shadow: 4px 4px 0px #000;
`;

const MessageText = styled.p`
  font-family: "IBM Plex Mono", monospace;
`;

const MessageFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LikeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const LikeBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  padding: 0.4rem;
  background-color: ${(props) =>
    props.status === "liked" ? "#FFB6C1" : "#E0E0E0"};
`;

const FooterText = styled.p`
  font-family: "Inter", sans-serif;
  color: #999;
`;

const Message = (props) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount((count) => count + 1);
  };

  return (
    <StyledMessage>
      <MessageText>{props.message}</MessageText>
      <MessageFooter>
        <LikeContainer>
          <LikeBtn
            status={count > 0 ? "liked" : "not-liked"}
            onClick={handleLike}
          >
            <ion-icon name="heart"></ion-icon>
          </LikeBtn>
          <FooterText>x {count}</FooterText>
        </LikeContainer>
        <FooterText>{props.time} ago</FooterText>
      </MessageFooter>
    </StyledMessage>
  );
};

export default Message;
