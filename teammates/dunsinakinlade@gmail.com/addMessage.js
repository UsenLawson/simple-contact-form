// teammates/dunsinakinlade@gmail.com/addMessage.js
import fs from "fs";

export function addMessage(newMessage) {
  try {
    const data = fs.readFileSync("messages.json", "utf8");
    const messages = JSON.parse(data);

    // assign id to new message
    newMessage.id = messages.length + 1;
    messages.push(newMessage);

    fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));
    return { success: true, message: "Message added successfully" };
  } catch (error) {
    console.error("Error adding message:", error);
    return { success: false, message: "Failed to add message" };
  }

}

