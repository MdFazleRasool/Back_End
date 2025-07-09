const TelegramBot= require('node-telegram-bot-api');

const dotenv = require('dotenv');
const { default: axios } = require('axios');

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN,{polling : true}) ;
// bot.on ('message' ,(option) => {
//     console.log("message receied on bot " ,option); 
//     bot.sendMessage(option.chat.id,"Hello I am a bot  .  i am here to help you with your Queries . please type /help to know more about me");
// })

bot.onText(/\/joke/,async (option) => {
    const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke');
    console.log(response);
    const setUp = response.data.setup;
    const punchLine = response.data.punchline;
    bot.sendMessage(option.chat.id , setUp + ' , ' + punchLine);
});