import React, { useState } from "react";

const Form = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>What is making me happy right now?</h2>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Please type a message"
      />
      <button type="submit">
        <ion-icon name="heart"></ion-icon>Send Happy Thought
        <ion-icon name="heart"></ion-icon>
      </button>
    </form>
  );
};

export default Form;
