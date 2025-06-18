const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const PORT = process.env.PORT || 3000;

// === BOT TELEGRAM ===
const token = "ISI_TOKEN_BOT_KAMU"; // ganti dengan tokenmu
const bot = new TelegramBot(token, { polling: true });

const WEBAPP_URL = "https://webapp-telegram-xxxx.onrender.com"; // ganti setelah deploy

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Selamat datang! Klik tombol di bawah untuk buka WebApp:", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "🌐 Buka WebApp",
          web_app: { url: WEBAPP_URL }
        }
      ]]
    }
  });
});

// === WEBAPP EXPRESS ===
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
