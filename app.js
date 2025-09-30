import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware: helps Express understand JSON data
app.use(express.json());

// Path to our contacts file
const contactsFile = path.resolve("data", "contacts.json");

//  1. POST request to save a message
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Check if any field is empty
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Read current data from file
  const data = fs.readFileSync(contactsFile, "utf8");
  const contacts = JSON.parse(data);

  // Create new message
  const newMessage = {
    id: contacts.length + 1,
    name,
    email,
    message,
    date: new Date().toISOString(),
  };

  // Add new message to the list
  contacts.push(newMessage);

  // Save back to file
  fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

  // Send success response
  res.status(201).json({ message: "Message saved successfully!", data: newMessage });
});

//  2. GET request to view all messages
app.get("/messages", (req, res) => {
  const data = fs.readFileSync(contactsFile, "utf8");
  const contacts = JSON.parse(data);

  res.status(200).json(contacts);
});

//  3. Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});