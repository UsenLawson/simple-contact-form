import fs from "fs";

export function saveMessage(name, email, message) {
  const data = JSON.parse(fs.readFileSync("./data/messages.json", "utf8"));
  const newMessage = { id: Date.now(), name, email, message };
  data.push(newMessage);
  fs.writeFileSync("./data/messages.json", JSON.stringify(data, null, 2));
  console.log("Message saved successfully by Usen!");
}