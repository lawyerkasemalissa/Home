const fs = require('fs');

const payload = process.argv[2];
if (!payload) {
  console.error("No payload found.");
  process.exit(1);
}

const dataPath = "data/messages.json";
let messages = [];
if (fs.existsSync(dataPath)) {
  messages = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

const event = JSON.parse(payload);
const newMessage = JSON.parse(event.client_payload.message_json);

messages.push(newMessage);
fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));
console.log("Message saved!");
