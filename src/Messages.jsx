import Message from "./components/Message";

const Messages = (props) => {
  return (
    <>
      {props.messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </>
  );
};

export default Messages;
