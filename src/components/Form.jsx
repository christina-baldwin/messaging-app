import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: solid black 1px;
  background-color: #e8e8e8;
  padding: 1rem;
  box-shadow: 4px 4px 0px #000;
`;

const MainHeading = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
`;

const StyledInput = styled.input`
  height: 50px;
  padding: 0 0.5rem;
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
  background-color: #faa0a0;
`;

const Form = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(message);
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
