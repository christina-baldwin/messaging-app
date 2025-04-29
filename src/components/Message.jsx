import React, { useState } from "react";

const Message = (props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <p>{props.message}</p>
      <button onClick={handleCount}>
        <ion-icon name="heart"></ion-icon>
      </button>
      <div>x {count}</div>
      <div>{props.time} ago</div>
    </div>
  );
};

export default Message;
