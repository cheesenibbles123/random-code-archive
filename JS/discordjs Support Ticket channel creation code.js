SupportTickets = true;

if (message.channel.id === config.serverInfo.channels.supportTicketChannel && SupportTickets === true){
		let content = message.content;
		let d = new Date();
		let date = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
		message.guild.createChannel(`${message.author.username}-${date}`,{type: "text", permissionOverwrites: [
			{
				id : config.serverInfo.serverId,
				deny : ['VIEW_CHANNEL'],
			},
			{
				id : `${message.author.id}`,
				allow : ["VIEW_CHANNEL"],
			},
			{
				id : config.serverInfo.roles.serverAdministrator,
				allow : ["VIEW_CHANNEL"],
			},	
		], reason: 'New Support Ticket Created!'}).then(channel => {
			channel.send("Query is: "+content+" - please wait for an administrator to respond to your ticket.");
		});
		message.delete({timeout: 0, reason: "Support ticket creation."});
	}
