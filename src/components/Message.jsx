import React, { useState } from "react";

const Message = ({ message, time }) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount((count) => count + 1);
  };

  const calculateTime = () => {
    const seconds = Math.floor((Date.now() - time) / 1000);
    return `${seconds} seconds ago`;
  };

  return (
    <div className="w-[350px] h-[120px] flex flex-col justify-between gap-4 border border-black bg-white p-4 shadow-[4px_4px_0px_black]">
      <p className="font-mono text-lg font-normal">{message}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center justify-center rounded-full border-none p-2 text-lg ${
              count > 0 ? "bg-pink-300" : "bg-gray-300"
            }`}
          >
            <ion-icon name="heart"></ion-icon>
          </button>
          <p className="text-sm text-gray-500 font-sans">x {count}</p>
        </div>
        <p className="text-sm text-gray-500 font-sans">{calculateTime()}</p>
      </div>
    </div>
  );
};

export default Message;
