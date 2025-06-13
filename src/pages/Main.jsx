import { useEffect, useState } from "react";

import Form from "../components/Form";
import LikedMessages from "../components/LikedMessages";
import Messages from "../components/Messages";

const Main = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://api-project-ns11.onrender.com/thoughts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        const sortedMessages = [...data.response].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setMessages(sortedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (thoughtId) => {
    try {
      const token = localStorage.getItem("token"); // if your API needs auth

      const response = await fetch(
        `https://api-project-ns11.onrender.com/thoughts/${thoughtId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      // Update local state by removing deleted message
      setMessages((prev) => prev.filter((msg) => msg._id !== thoughtId));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleUpdate = async (thoughtId, newMessage) => {
    try {
      const token = localStorage.getItem("token"); // if your API needs auth

      const response = await fetch(
        `https://api-project-ns11.onrender.com/thoughts/${thoughtId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message: newMessage }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update message");
      }

      const data = await response.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg._id === thoughtId
            ? { ...msg, message: data.response.message }
            : msg
        )
      );
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[500px] w-full">
        <h1 className="text-center font-sans mb-10 text-4xl text-pink-500">
          Happy Thoughts!
        </h1>
        <Form setMessages={setMessages} />

        <Messages
          messages={messages}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />

        <LikedMessages messages={messages} />
      </div>
    </div>
  );
};

export default Main;
