import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Message = ({ id, message, time, likes, onDelete, onUpdate }) => {
  const thoughtIdUrl = `https://api-project-ns11.onrender.com/thoughts/${id}/like`;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  useEffect(() => {
    const fetchLikedStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const decoded = jwtDecode(token);
        const userId = decoded.id; // ✅ use this in the fetch URL

        const res = await fetch(
          `https://api-project-ns11.onrender.com/thoughts/liked/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch liked thoughts");
        const data = await res.json();

        const likedIds = data.response.map((t) => t._id);
        setLiked(likedIds.includes(id)); // true if this thought is liked
      } catch (err) {
        console.error(err);
      }
    };

    fetchLikedStatus();
  }, [id]);

  const handleLike = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(thoughtIdUrl, {
        method: liked ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Failed to like/unlike");
      }

      const data = await response.json();
      setLiked(!liked);
      setLikeCount(data.thought.hearts); // always get latest count from backend
    } catch (error) {
      console.error("Error liking/unliking:", error.message);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirmDelete) return;

    onDelete(id);
  };

  const handleUpdate = async (newMessage) => {
    if (!newMessage || newMessage.trim() === "") return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `https://api-project-ns11.onrender.com/thoughts/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newMessage }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        alert("Update failed: " + data.message);
        return;
      }

      onUpdate(id, newMessage);
    } catch (error) {
      console.error(error);
      alert("Update request failed");
    }
  };

  const calculateTime = (time) => {
    let timeDiff = Math.floor((Date.now() - new Date(time)) / 1000);

    if (timeDiff < 60) {
      return `${timeDiff} second${timeDiff === 1 ? "" : "s"} ago`;
    }
    if (timeDiff < 3600) {
      timeDiff = Math.floor(timeDiff / 60);
      return `${timeDiff} minute${timeDiff === 1 ? "" : "s"} ago`;
    }
    if (timeDiff < 86400) {
      timeDiff = Math.floor(timeDiff / 3600);
      return `${timeDiff} hour${timeDiff === 1 ? "" : "s"} ago`;
    }
    if (timeDiff < 2592000) {
      timeDiff = Math.floor(timeDiff / 86400);
      return `${timeDiff} day${timeDiff === 1 ? "" : "s"} ago`;
    }
    return "a long time ago";
  };

  return (
    <div className="flex flex-col justify-between gap-4 border border-black bg-white p-4 shadow-[4px_4px_0px_black]">
      <p className="font-mono text-lg font-normal break-words">{message}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center justify-center rounded-full border-none p-2 text-lg cursor-pointer ${
              liked ? "bg-pink-300" : "bg-gray-300"
            }`}
          >
            <ion-icon name="heart"></ion-icon>
          </button>
          <p className="text-sm text-gray-500 font-sans">x {likeCount}</p>
        </div>
        <p className="text-sm text-gray-500 font-sans">{calculateTime(time)}</p>
      </div>

      <div className="flex gap-4 mt-2">
        <button
          onClick={handleDelete}
          className={`self-start flex items-center justify-center gap-1 px-3 py-2 border-none rounded-[15px] bg-pink-200 font-bold text-sm cursor-pointer  hover:bg-pink-300 transition
`}
        >
          Delete
        </button>
        <button
          onClick={() => {
            const newMessage = prompt("Enter new message:", message);
            console.log("Updating message to:", newMessage);

            if (newMessage && newMessage.trim() !== "") {
              handleUpdate(newMessage);
            }
          }}
          className={`self-start flex items-center justify-center gap-1 px-3 py-2 border-none rounded-[15px] bg-pink-200 font-bold text-sm cursor-pointer  hover:bg-pink-300 transition`}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Message;
