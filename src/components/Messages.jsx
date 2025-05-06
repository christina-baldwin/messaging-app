import Message from "./Message";

const Messages = (props) => {
  return (
    <div className="flex flex-col gap-12">
      {props.messages
        .slice(0)
        .reverse()
        .map((message) => (
          <Message
            key={message.id}
            message={message.message}
            time={message.time}
          />
        ))}
    </div>
  );
};

export default Messages;
