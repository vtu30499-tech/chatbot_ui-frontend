import MessageBubble from "../components/MessageBubble";
import { useState } from "react";
import { sendMessage } from "../services/api";

function ChatPage() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! How can I help you?",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = message;

    setMessage("");

    const botReply = await sendMessage(question);

    const botMessage = {
      sender: "bot",
      text: botReply,
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "30px auto",
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1>Chat With AI</h1>

      <div
        style={{
          height: "400px",
          border: "1px solid gray",
          marginBottom: "20px",
          padding: "10px",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Type your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          style={{
            flex: 1,
            padding: "10px",
          }}
        />

        <button
          onClick={handleSend}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;