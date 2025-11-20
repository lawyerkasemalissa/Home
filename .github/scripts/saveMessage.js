const fs = require('fs');
const path = require('path');

const messageJson = process.env.MESSAGE_JSON;
if (!messageJson) {
  console.log("No message data found.");
  process.exit(1);
}

const messagesDir = "data";
const messagesFile = path.join(messagesDir, "messages.json");

// إنشاء المجلد إذا لم يكن موجود
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir, { recursive: true });
}

// قراءة الملف إذا كان موجودًا
let messages = [];
if (fs.existsSync(messagesFile)) {
  messages = JSON.parse(fs.readFileSync(messagesFile, "utf-8"));
}

// إضافة الرسالة الجديدة
const newMessage = JSON.parse(messageJson);
messages.push(newMessage);

// حفظ الملف بصيغة JSON
fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
console.log("✅ Message saved!");
