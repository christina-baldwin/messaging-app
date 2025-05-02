import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 350px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border: solid black 1px;
  background-color: #f5f5f5;
  padding: 1rem;
  box-shadow: 4px 4px 0px #000;
  margin-bottom: 3rem;
`;

const MainHeading = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

const StyledInput = styled.input`
  font-family: "IBM Plex Mono", monospace;
  height: 100px;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
`;

const SubmitBtn = styled.button`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  padding: 0.5rem 0.7rem;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  background-color: #ffb6c1;
  font-wight: 700;
  font-size: 0.9rem;
`;

const Form = (props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      message: message,
      time: Date.now(),
    };
    props.onSend(newMessage);
    setMessage("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <MainHeading>What is making you happy right now?</MainHeading>
      <StyledInput
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <SubmitBtn type="submit">
        <ion-icon name="heart"></ion-icon>Send Happy Thought
        <ion-icon name="heart"></ion-icon>
      </SubmitBtn>
    </StyledForm>
  );
};

export default Form;
