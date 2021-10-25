const { CommandInteraction, Client, MessageEmbed} = require('discord.js');
const moment = require('moment');
const { user } = require('../..');

module.exports = {
    name: 'serverinfo',
    description: 'serverinfo command',
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
     run: async(client, interaction, args) => {
        const vanityCode = interaction.guild.vanityURLCode;
        let vanityInvite = `https://discord.gg/${vanityCode}`;
        if (vanityCode === null) vanityInvite = 'No custom URL';
        const members = interaction.guild.members.cache;
        const roles = interaction.guild.roles.cache.filter(r => r.id !== interaction.guild.id).map(role => role.toString());
         const embed = new MessageEmbed()
        .setTimestamp()
        .setTitle("**Server Information**")
        .setColor('RANDOM')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .addField(`🎫 Name of server:`, interaction.guild.name, true)
        .addField(`🆔 ID of server`, interaction.guild.id, true)
       // .addField('#️⃣ Owner ID:', `${(await interaction.guild.ownerId)}`, true)
        .addField('👑 Owner Name:', `${(await interaction.guild.fetchOwner()).user}`, true)
        .addField(`👥 No. of Members`, interaction.guild.memberCount.toString(), true)
        .addField(`🤖 No. of Bots:`, interaction.guild.members.cache.filter(member => member.user.bot).size.toString(), true)
        .addField(`😗 Emojis:`, interaction.guild.emojis.cache.size.toString(), true)
        .addField(`👻 Animated Emoji\'s:`,interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(),true )
        .addField(`💬 # of Text Channel\'s:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size.toString(),true )
        .addField(`🎤 # of Voice Channel\'s:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size.toString(),true )
        .addField(`👔 Total Amount of Roles:`, interaction.guild.roles.cache.size.toString(), true)
        .addField(`📅 Created at`, `${moment(interaction.guild.createdTimestamp).format('LLL')} | \`${moment(interaction.guild.createdTimestamp).fromNow()}\``, true)
        .addField(`🔗 Vanity Link`, `${vanityInvite}`, true)
        .addField(`📶 Boost Level`, interaction.guild.premiumTier.toString(), true)
        .addField(`🚀 Total Boosts`, interaction.guild.premiumSubscriptionCount.toString(), true)
        .addField(`🔒 Verification Level`, interaction.guild.verificationLevel.toString(), true)
        .addField(`Roles [${roles.length}]`, roles.length < 15 ? roles.join(' | ') : roles.length > 15 ? `${roles.slice(0, 15).join(' | ')} | \`+ ${roles.length-15} roles...\`` : 'None')
        .setAuthor(`${interaction.guild.name}`)
        interaction.editReply({ embeds: [ embed ] });
}
}