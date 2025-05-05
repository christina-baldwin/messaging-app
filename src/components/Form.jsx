import React, { useState } from "react";

const Form = (props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: Date.now(),
      message: message,
      time: Date.now(),
    };
    props.onSend(newMessage);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[350px] h-[150px] flex flex-col justify-between gap-4 border border-black bg-[#f5f5f5] p-4 shadow-[4px_4px_0px_#000] mb-12"
    >
      <h1 className="text-base font-medium">
        What is making you happy right now?
      </h1>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="font-mono h-[100px] px-2 text-sm font-normal border border-gray-400 rounded bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button
        type="submit"
        className="self-start flex items-center justify-center gap-1 px-3 py-2 border-none rounded-[15px] bg-pink-200 font-bold text-sm cursor-pointer"
      >
        <ion-icon name="heart"></ion-icon>
        Send Happy Thought
        <ion-icon name="heart"></ion-icon>
      </button>
    </form>
  );
};

export default Form;
