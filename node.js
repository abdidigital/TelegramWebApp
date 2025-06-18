const TelegramBot = require('node-telegram-bot-api');

const token = 'ISI_TOKEN_BOT_KAMU';
const bot = new TelegramBot(token, { polling: true });

const WEBAPP_URL = 'https://webapp-telegram-xxxx.onrender.com';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Klik tombol di bawah untuk membuka WebApp 👇", {
    reply_markup: {
      keyboard: [[
        {
          text: "🌐 Buka WebApp",
          web_app: { url: WEBAPP_URL }
        }
      ]],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});
