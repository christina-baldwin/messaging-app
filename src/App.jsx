import React, { useState } from "react";
import Form from "./components/Form";
import Messages from "./Messages";

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((previous) => [...previous, message]);
  };

  return (
    <>
      <Form onSend={addMessage} />
      <Messages messages={messages} />
    </>
  );
};
