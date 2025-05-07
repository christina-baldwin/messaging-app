import Message from "./Message";

const Messages = (props) => {
  return (
    <div className="flex flex-col gap-12">
      {props.messages.map((message) => (
        <Message
          id={message._id}
          message={message.message}
          time={message.createdAt}
          likes={message.hearts}
        />
      ))}
    </div>
  );
};

export default Messages;
