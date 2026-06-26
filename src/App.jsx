import { useState } from "react";
import HomePage from "./pages/HomePage";
import ChatWidget from "./components/ChatWidget";
import ChatPopup from "./components/ChatPopup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <HomePage />

      <ChatWidget onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
  <ChatPopup
    onClose={() => setIsOpen(false)}
  />
)}
    </div>
  );
}

export default App;