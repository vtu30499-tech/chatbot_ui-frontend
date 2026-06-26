import axios from "axios";

export const sendMessage = async (question) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/chat",
      {
        question: question,
      }
    );

    return response.data.answer;
  } catch (error) {
    return "Backend connection failed.";
  }
};