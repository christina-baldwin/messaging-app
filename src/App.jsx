import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Form from "./components/Form";
import Messages from "./Messages";

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((previous) => [...previous, message]);
  };

  return (
    <>
      <GlobalStyles />
      <Form onSend={addMessage} />
      <Messages messages={messages} />
    </>
  );
};
