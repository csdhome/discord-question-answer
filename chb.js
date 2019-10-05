const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const questions = require('./questions.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var message = msg.content;
  questions.questions.forEach(question => {
    if (message.toLowerCase().includes(question.question.toLowerCase())) {
      msg.reply(question.answer);
      return;
    }
  });
});

client.login(auth.token);