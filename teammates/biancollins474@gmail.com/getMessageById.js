// teammates/Ene/getMessageById.js
import fs from "fs";

// Function to get a single message by its ID
export function getMessageById(id) {
  try {
    const data = fs.readFileSync("messages.json", "utf8");
    const messages = JSON.parse(data);
    const message = messages.find(msg => msg.id === id);
    return message || { error: "Message not found" };
  } catch (error) {
    console.error("Error reading message:", error);
    return { error: "Unable to read message file" };
  }
}