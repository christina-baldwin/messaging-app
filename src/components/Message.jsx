import React from "react";

const Message = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <button>
        <ion-icon name="heart"></ion-icon>
      </button>
      <div>x {props.likeCount}</div>
      <div>{props.time} ago</div>
    </div>
  );
};

export default Message;
