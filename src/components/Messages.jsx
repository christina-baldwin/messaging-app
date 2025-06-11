import Message from "./Message";
import { motion } from "framer-motion";
import { useState } from "react";

const Messages = ({ messages: initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (thoughtId) => {
    setMessages(messages.filter((msg) => msg._id !== thoughtId));
  };

  const handleUpdate = (thoughtId, newMessage) => {
    setMessages(
      messages.map((msg) =>
        msg._id === thoughtId ? { ...msg, message: newMessage } : msg
      )
    );
  };

  return (
    <div className="flex flex-col gap-12 mb-12">
      <h2 className="font-sans mb-6 text-2xl text-pink-500">Latest Messages</h2>
      {messages.map((message) => (
        <motion.div
          key={message._id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Message
            id={message._id}
            message={message.message}
            time={message.createdAt}
            likes={message.hearts}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Messages;
