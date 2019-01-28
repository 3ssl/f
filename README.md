# fconst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setGame(`mohammadbr 7be `,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});







client.login("mfa.GzWe9pIbW979_85wVOjiAAjAtxLc0t1TFDaiPG4RjC2GKrOh5-fOYYGQBE2oA4hmTHRokLhsgHgUOub1JZaK");
