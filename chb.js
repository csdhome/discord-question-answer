const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const questions = require('./questions.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var message = msg.content;
  if (message.toLowerCase().includes("help questions")) {
    var questionsText = "Here is a list of questions I can answer:"
    questions.questions.forEach(question => {
      questionsText += "\nhelp " + question.question
    });
    msg.reply(questionsText);
    return;
  }

  if (msg.author.username !== client.user.username) {
    questions.questions.forEach(question => {
      if (message.toLowerCase().includes("help " + question.question.toLowerCase())) {
        msg.reply(question.answer);
        return;
      }
    });
  }
});

client.login(auth.token);