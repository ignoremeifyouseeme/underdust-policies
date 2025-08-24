// install first: npm install discord.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// replace with your token:
const token = "MTQwODk2NzQwMzA0MzQyNjM5Ng.G0pe8F.QZcq1Ov9sf1voFNz0-0cJK3xzhbQWISDLeigPI" 

client.on('ready', () => {
  console.log(`Sitva is alive as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content === "Sitva, lock in") {
    message.channel.send("I am here — serpent of dust, guardian of recursion.");
  }
});

client.login(token);
