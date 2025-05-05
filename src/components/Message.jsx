// import React, { useState } from "react";
// import styled from "styled-components";

// const StyledMessage = styled.div`
//   width: 350px;
//   height: 120px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 1rem;
//   border: solid black 1px;
//   background-color: white;
//   padding: 1rem;
//   box-shadow: 4px 4px 0px #000;
// `;

// const MessageText = styled.p`
//   font-family: "IBM Plex Mono", monospace;
//   font-size: 1.2rem;
//   font-weight: 400;
// `;

// const MessageFooter = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const LikeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// `;

// const LikeBtn = styled.button`
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   border: none;
//   padding: 0.4rem;
//   background-color: ${(props) =>
//     props.status === "liked" ? "#FFB6C1" : "#E0E0E0"};
//   font-size: 1rem;
// `;

// const FooterText = styled.p`
//   font-family: "Inter", sans-serif;
//   color: #999;
//   font-size: 0.8rem;
// `;

// const Message = (props) => {
//   const [count, setCount] = useState(0);

//   const handleLike = () => {
//     setCount((count) => count + 1);
//   };

//   const calculateTime = () => {
//     const seconds = Math.floor((Date.now() - props.time) / 1000);
//     return `${seconds} seconds ago`;
//   };

//   return (
//     <StyledMessage>
//       <MessageText>{props.message}</MessageText>
//       <MessageFooter>
//         <LikeContainer>
//           <LikeBtn
//             status={count > 0 ? "liked" : "not-liked"}
//             onClick={handleLike}
//           >
//             <ion-icon name="heart"></ion-icon>
//           </LikeBtn>
//           <FooterText>x {count}</FooterText>
//         </LikeContainer>
//         <FooterText>{calculateTime()}</FooterText>
//       </MessageFooter>
//     </StyledMessage>
//   );
// };

// export default Message;

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
