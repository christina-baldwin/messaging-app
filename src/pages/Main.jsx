import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import LikedMessages from "../components/LikedMessages";
import Messages from "../components/Messages";

const url = "https://api-project-ns11.onrender.com";
// const url = "http://localhost:8080";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await fetch(`${url}/thoughts`);
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
  }, [navigate]);

  const handleDelete = async (thoughtId) => {
    try {
      const token = localStorage.getItem("token");

      console.log("Token before DELETE:", token);

      const response = await fetch(`${url}/thoughts/${thoughtId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        let errorMessage = "Failed to delete message";
        try {
          const data = await response.json();
          if (data?.message) errorMessage = data.message;
        } catch (err) {
          console.warn("No JSON returned from delete response:", err);
        }
        alert(errorMessage);
        return;
      }

      setMessages((prev) => prev.filter((msg) => msg._id !== thoughtId));
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Delete request failed");
    }
  };

  const handleUpdate = async (thoughtId, newMessage) => {
    try {
      const token = localStorage.getItem("token");

      console.log("Token before PATCH:", token);

      const response = await fetch(`${url}/thoughts/${thoughtId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: newMessage }),
      });

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleUpdateLike = (thoughtId, newLikedBy, newHearts) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg._id === thoughtId
          ? { ...msg, likedBy: newLikedBy, hearts: newHearts }
          : msg
      )
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[500px] w-full">
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-[15px] bg-pink-300 text-white font-bold hover:bg-pink-400 cursor-pointer mb-8"
        >
          Log Out
        </button>
        <h1 className="text-center font-sans mb-10 text-4xl text-pink-500">
          Happy Thoughts!
        </h1>
        <Form setMessages={setMessages} />

        <Messages
          messages={messages}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onUpdateLike={handleUpdateLike}
        />

        <LikedMessages messages={messages} onUpdateLike={handleUpdateLike} />
      </div>
    </div>
  );
};

export default Main;
