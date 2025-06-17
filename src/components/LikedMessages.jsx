import { useEffect, useState } from "react";

import Message from "./Message";

const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const base64Payload = token.split(".")[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload.email || payload.id || null;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

const LikedMessages = (props) => {
  const [likedMessages, setLikedMessages] = useState([]);

  useEffect(() => {
    const currentUser = getUserFromToken();
    if (!currentUser) return;

    const likedMessages = props.messages.filter((message) =>
      message.likedBy?.includes(currentUser)
    );
    setLikedMessages(likedMessages);
  }, [props.messages]);

  return (
    <div className="mb-20">
      <div>
        <h2 className="font-sans mb-6 text-2xl text-pink-500">
          Liked Messages
        </h2>
        <div className="mb-4 text-right">
          <h3 className="text-base text-gray-500 font-sans">
            You have liked {likedMessages.length} message
            {likedMessages.length === 1 ? "" : "s"}
          </h3>
        </div>
        <div className="flex flex-col gap-12">
          {likedMessages.length > 0 ? (
            likedMessages.map((message) => (
              <Message
                key={message._id}
                id={message._id}
                message={message.message}
                time={message.createdAt}
                likes={message.hearts}
              />
            ))
          ) : (
            <p>No liked messages.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedMessages;
