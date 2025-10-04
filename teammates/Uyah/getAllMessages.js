// teammates/Uyah/getAllMessages.js
import fs from "fs";

// Function to get all messages from messages.json
export function getAllMessages() {
  try {
    const data = fs.readFileSync("messages.json", "utf8");
    const messages = JSON.parse(data);
    return messages;
  } catch (error) {
    console.error("Error reading messages:", error);
    return [];
  }
}