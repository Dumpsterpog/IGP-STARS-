const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
 const djsGames = require('djs-games')

module.exports = {
	name: 'invite',
	description: 'Provides some useful links of the bot!',
	run: async (client, interaction) => {
		const roleColor = "BLACK";

		let invembed = new MessageEmbed()
			.setDescription("BELINDA")
      .addField('Invite Link:','[Invite me](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=261989723639&scope=bot%20applications.commands)')
			.setColor(roleColor)

		
    		interaction.followUp({ embeds: [invembed]}); 
  }
}