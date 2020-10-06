// IF MESSAGE TOTAL COUNT IS BEING LOGGED IN A DATABASE
function getChannelInformation(message){
	var con = mysql.createConnection({
		host : mysqlLoginData.host,
		user : mysqlLoginData.user,
		password : mysqlLoginData.password,
		database : mysqlLoginData.database,
	});

	con.connect(err => {
		if(err) console.log(err);
	});

	con.query(`SELECT * FROM channel_messages WHERE channel_id = '${message.channel.id}'`, (err,rows) => {
		let message_count;
		if (rows.length < 1){
			message_count = 0;
		}else{
			message_count = rows[0].message_count;
		}

		let guild = bot.guilds.cache.get(message.guild.id);

		let channelinfo = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${message.channel.name}`)
			.setAuthor(`Channel Info`)
			.addField('Type', `${message.channel.type}`,true)
			.addField('Created', `${message.channel.createdAt}`,true)
			.addField('Amount of people that can view', `${message.channel.members.size} / ${guild.members.cache.size}`,true)
			.addField('Nsfw', `-${message.channel.nsfw}`,true)
			.addField('Category', `-${message.channel.parent}`,true)
			.addField('Last Pin', `-${message.channel.lastPinAt}`,true)
			.addField('Topic', `-${message.channel.topic}`,true)
			.addField('Currently being typed in', `${message.channel.typing}`,true)
			.addField('Messages Sent', `${message_count}`,true)
			.setTimestamp();
		message.channel.send(channelinfo);
	});

	setTimeout(function(){
		con.destroy();
		con = null;
	},3000);
	
	return;
}

// IF MESSAGE TOTAL COUNT IS NOT BEING LOGGED IN A DATABASE
function getChannelInformation(message){

		let guild = bot.guilds.cache.get(message.guild.id);

		let channelinfo = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${message.channel.name}`)
			.setAuthor(`Channel Info`)
			.addField('Type', `${message.channel.type}`,true)
			.addField('Created', `${message.channel.createdAt}`,true)
			.addField('Amount of people that can view', `${message.channel.members.size} / ${guild.members.cache.size}`,true)
			.addField('Nsfw', `-${message.channel.nsfw}`,true)
			.addField('Category', `-${message.channel.parent}`,true)
			.addField('Last Pin', `-${message.channel.lastPinAt}`,true)
			.addField('Topic', `-${message.channel.topic}`,true)
			.addField('Currently being typed in', `${message.channel.typing}`,true)
			.setTimestamp();
		message.channel.send(channelinfo);
	});
	
	return;
}
