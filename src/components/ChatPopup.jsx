import { useState } from "react";
import { sendMessage } from "../services/api";

function ChatPopup({ onClose }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = message;

    setMessage("");

    const botReply = await sendMessage(question);

    const botMessage = {
      text: botReply,
      sender: "bot",
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px",
        right: "20px",
        width: "350px",
        height: "500px",
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "20px",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display:"flex",
          justifyContent:"flex-end",
          marginBottom:"10px"
          }}
          >

          <button
          onClick={onClose}
          style={{
          cursor:"pointer",
          width:"28px",
          height:"28px",
          borderRadius:"50%",
          border:"none",
          background:"#fff",
          color:"#000",
          fontSize:"16px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          boxShadow:"0 1px 5px rgba(0,0,0,0.15)"
          }}
          >
          ✕
          </button>

      </div>
      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          border: "none",
          padding: "10px",
          overflowY: "auto",
          marginBottom: "10px",
          borderRadius: "10px",
        }}
      >
        {messages.length === 0 && (
  <div
    style={{
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      color:"#0b0b0b",
      gap:"15px"
    }}
  >

    <div
      style={{
        fontSize:"38px"
      }}
    >
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 23.375V44.625" stroke="#081E2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 16.2917V51.7084" stroke="#081E2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34 9.20825V58.7916" stroke="#081E2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M46.75 16.2917V51.7084" stroke="#081E2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59.5 23.375V44.625" stroke="#081E2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>


    <p>
      Get help from AwBot
    </p>

  </div>
)}
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                backgroundColor:
                msg.sender === "user" ? "#f1f1f1" : "#e5e5e5",
                color: "black",
                maxWidth: "90%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input Area */}
              <div
                style={{
                display:"flex",
                alignItems:"center",
                position:"relative",
                marginTop:"10px",
                }}
                >

                <input
                type="text"
                placeholder="Ask a question"
                value={message}

                onChange={(e)=>setMessage(e.target.value)}

                onKeyDown={(e)=>{
                if(e.key==="Enter"){
                handleSend();
                }
                }}

                style={{
                width:"100%",
                height:"45px",
                padding:"0 55px 0 15px",
                borderRadius:"25px",
                border:"1px solid #ddd",
                background:"#fff",
                color:"#000",
                fontSize:"14px",
                outline:"none",
                boxSizing:"border-box",
                }}

                />


                <button

                onClick={handleSend}

                style={{

                position:"absolute",
                right:"6px",

                width:"32px",
                height:"32px",

                borderRadius:"50%",
                border:"none",

                background:"#000",
                color:"#fff",

                cursor:"pointer",

                fontSize:"18px",

                display:"flex",
                alignItems:"center",
                justifyContent:"center"

                }}

                >

                ↑

                </button>


                </div>
    </div>
  );
}

export default ChatPopup;