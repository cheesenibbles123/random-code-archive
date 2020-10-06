const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  // ON READY CODE
  // Set status
  // Timers / timed function calls
});

bot.on("message", async message => {
  // ON MESSAGE SENT
  
  // IGNORE OTHER BOTS
  if (message.author.bot) return;
  
  // IGNORE DM MESSAGES
	if (message.channel.type === "dm") return;
  
  //Split messages into the command and arguments
	let messagearray = message.content.split(" ");
	let command = messagearray[0].substring(1);
	command = command.toLowerCase();
	let args = messagearray.slice(1);
	let serverid = message.channel.guild.id;
  
  if (command === "ping"){
    message.channel.send("Pong!");
    message.react("🏓");
  }
  
});

bot.on('raw', async event => {
  // RAW CODE
  // Reactions, channel logging, ban logging etc etc
});

bot.on('error', console.error);
bot.on("warn", (e) => console.warn(e));

bot.login("BOT TOKEN");
