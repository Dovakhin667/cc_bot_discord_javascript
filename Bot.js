const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", function () {
 console.log("Carapuce est dans les places !");
});
bot.login("NzkwNTY3NTUzMjM1ODEyMzcz.X-CfaA.qmGL9GDkH9DUbYK-eJE6OqfwOgo");
bot.on("message", message => {
 if (message.content === "!ping") {
 message.channel.send("Carapong !");
 }
});
