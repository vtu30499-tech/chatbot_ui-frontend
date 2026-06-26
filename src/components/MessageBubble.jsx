function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? "#2563eb" : "#374151",
          color: "white",
          padding: "10px 15px",
          borderRadius: "15px",
          maxWidth: "60%",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;