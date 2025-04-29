import React, { useState } from "react";

const Message = (props) => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount((count) => count + 1);
  };

  const handleDislike = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div>
      <p>{props.message}</p>
      <button onClick={handleLike}>
        <ion-icon name="heart"></ion-icon>
      </button>
      <div>x {count}</div>
      <button onClick={handleDislike}>
        <ion-icon name="heart-dislike"></ion-icon>
      </button>
      <div>{props.time} ago</div>
    </div>
  );
};

export default Message;
