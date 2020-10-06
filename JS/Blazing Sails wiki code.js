function getWikiInfo(message,args){
	if (Array.isArray(args)){
		if (args[0].toLowerCase() === 'weapons'){
			fetch(`https://blazingsails.gamepedia.com/Category:Weapons`).then(res=>res.text()).then(response => {
				let globalList = response.split("<table");
				let rangedWeapons = globalList[1].split("<td><div class=");
				rangedWeapons = rangedWeapons.slice(0,rangedWeapons.length-1);
				let meleeWeapons = globalList[2].split("<td><div class=").slice(0,8);
				meleeWeapons[0] = meleeWeapons[0].split("</th>\n")[2];
				let found = false;

				//RANGED WEAPONS
				rangedWeapons.forEach(weapon => {
					let weaponStats = weapon.split("<td");
					if (typeof weaponStats[3] == undefined){
						console.log("error");
					}else{
						let stats = weaponStats[3].split("</b>");
						let name = weaponStats[1].substring(1,weaponStats[1].length - 7);
						if (args.slice(1).join(" ").toLowerCase() === name.toLowerCase()){
							let ammo = weaponStats[2].substring(1,weaponStats[2].indexOf("\n"));
							let dmg = stats[1].substring(1,stats[1].indexOf("\n"));
							let aoeDMG = stats[2].substring(1,stats[2].indexOf("\n"));
							let rof = stats[3].substring(1,stats[3].indexOf("\n"));
							let magSize = stats[4].substring(1,stats[4].indexOf("\n"));
							let rldTime = stats[5].substring(1,stats[5].indexOf("\n"));
							let prjSpd = stats[6].substring(1,stats[6].indexOf("\n"));
							let prjDrop = stats[7].substring(1,stats[7].indexOf("\n"));
							let WeaponEmbed = new Discord.RichEmbed()
								.setTitle(`${name}`)
								.setDescription(`Ammo: ${ammo}\nDamage: ${dmg}, AOE: ${aoeDMG}\nRate Of Fire: ${rof}\nMagazine Size: ${magSize}\nReload Time: ${rldTime}\nProjectile Speed: ${prjSpd}\nProjectile Drop: ${prjDrop}`)
								.setTimestamp();
							message.channel.send(WeaponEmbed);
							found = true;
						}
					}
				});

				//MELEE WEAPONS
				if (!found){
					meleeWeapons.forEach(weapon => {
						let weaponStats = weapon.split("<td");
						if (typeof weaponStats[2] == undefined){
							console.log("error");
						}else{
							let name = weaponStats[1].substring(1,weaponStats[1].length - 7);
							let stats = weaponStats[2].split("</b");
							if (args.slice(1).join(" ").toLowerCase() === name.toLowerCase()){
								let dmg = stats[1].substring(1,stats[1].indexOf("\n"));
								let attackSpd = stats[2].substring(1,stats[2].indexOf("\n"));
								let maxDps = stats[3].substring(1,stats[3].indexOf("\n"));
								let WeaponEmbed = new Discord.RichEmbed()
									.setTitle(`${name}`)
									.setDescription(`Damage: ${dmg}\nAttack Speed: ${attackSpd}\nMax DPS: ${maxDps}`)
									.setTimestamp();
								message.channel.send(WeaponEmbed);
								found = true;
							}
						}
					});
				}

				if (!found){
					message.reply(`Unable to find weapon **${args[1]}**, please make sure you spelt it correctly!`);
				}
			});
		}else
		if (args[0].toLowerCase() === 'resources'){
			fetch(`https://blazingsails.gamepedia.com/Category:Resources`).then(res=>res.text()).then(response => {
				globalInfo = response.split(`<div id="mw-content-text"`)[1].split(`</td></tr></tbody></table>`)[0];
				let found = false;
				if (args[1].toLowerCase() === 'wood'){
					let woodContent = globalInfo.split("<h2>")[2].split("<p>")[1].slice(0,globalInfo.split("<h2>")[2].split("<p>")[1].length - 5);
					let woodEmbed = new Discord.RichEmbed()
						.setTitle(`Wood`)
						.setDescription(`${woodContent}`)
						.setTimestamp();
					message.channel.send(woodEmbed);
					found = true;
				}else
				if (args.slice(1).join(" ").toLowerCase() === 'healing items'){
					let healingItems = globalInfo.split("<h2>")[3].split("<p>")[1].slice(0,globalInfo.split("<h2>")[3].split("<p>")[1].length - 5);
					let healingEmbed = new Discord.RichEmbed()
						.setTitle(`Healing Items`)
						.setDescription(`${healingItems}`)
						.setTimestamp();
					message.channel.send(healingEmbed);
					found = true;
				}else
				if (args.slice(1).join(" ").toLowerCase() === 'weapon ammo'){
					let list = globalInfo.split("<h2>")[4].split("<p>"); //[1].slice(0,globalInfo.split("<h2>")[3].split("<p>")[1].length - 5)
					let weaponAmmoEmbed = new Discord.RichEmbed()
						.setTitle(`Weapon Ammo`)
						.setDescription(`${list[1].slice(0,list[1].length-4)}`)
						.addField(`${list[2].split("<li>")[1].slice(0,list[2].split("<li>")[1].indexOf("</li>"))}`,`${list[3].slice(0,list[3].indexOf("\n"))}`,true)
						.addField(`${list[3].split("<li>")[1].slice(0,list[3].split("<li>")[1].indexOf("</li>"))}`,`${list[4].slice(0,list[4].indexOf("\n"))}`,true)
						.addField(`${list[4].split("<li>")[1].slice(0,list[4].split("<li>")[1].indexOf("</li>"))}`,`${list[5].slice(0,list[5].indexOf("\n"))}`,true)
						.setTimestamp();
					message.channel.send(weaponAmmoEmbed);
					found = true;
				}else{
					let globalList = response.split("<table")[1].split("</table>")[0].split("<div");
					globalList.forEach( shotType => {
						let info = shotType.split("<td>");
						if (typeof info[2] !== undefined && Array.isArray(info) && info.length > 2){
							let name = info[1].slice(0,info[1].indexOf("\n"));
							if (name.toLowerCase() === args.slice(1).join(" ").toLowerCase()){
								if (name.toLowerCase() === 'regular cannonball'){
									info[3] = `A regular cannonball is the only ammunation which is used for the swivel cannon, Shoulder cannon and Bomb launcher.\n</td>\n`
								}
								let shotTypeEmbed = new Discord.RichEmbed()
									.setTitle(`${name}`)
									.setDescription(`${info[3].replace(/<\/p>/g,"").replace(/<p>/g," - ").slice(0,info[3].indexOf("."))}.\n\nDrop Rate: ${info[2].slice(info[2].indexOf("</b>") + 5,info[2].length - 7)}`)
									.setTimestamp();
								message.channel.send(shotTypeEmbed);
								found = true;
							}
						}
					})
					//console.log(globalList);
					//let cannonShotTypes = globalList[1].split("<td><div class=");
				}

				if (!found){
					message.reply("Please make sure you have entered your query correctly!");
				}
			});
		}else
		if (args.slice(1).join(" ").toLowerCase() === 'shipupgrades'){
			message.reply("This category is not yet completed! :)");
		}else{
			message.reply("Currently only the `weapons`,`resources` categories are supported!");
		}
	}else{
		message.reply("Please make sure you have entered the category + item correctly!");
	}
}
