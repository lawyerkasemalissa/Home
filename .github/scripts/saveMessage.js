const fs = require('fs');

const messageJson = process.env.MESSAGE_JSON;
if (!messageJson) {
  console.log("No message data found.");
  process.exit(1);
}

const messagesFile = "data/messages.json";

let messages = [];
if (fs.existsSync(messagesFile)) {
  messages = JSON.parse(fs.readFileSync(messagesFile, "utf-8"));
}

const newMessage = JSON.parse(messageJson);
messages.push(newMessage);

fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
console.log("Message saved!");
