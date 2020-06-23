const Discord= require('discord.js');
const bot= new Discord.Client();

const token='NzI0OTg4NjMxOTAyNTg0OTM0.XvIgPQ.xOiselC1vbPhEDSrZJBgQw2VaCE';

bot.on('ready',()=>{
	console.log(bot.users.status);
})
bot.on("message",msg=>{
	console.log(msg.author.username);
	if (msg.author.username==="tor1k") {
		msg.reply("she iveras dzmakaco");
	}
	//msg.reply('HELLO Ngga');
	
})
bot.login(token);