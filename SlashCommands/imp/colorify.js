const { Client, Collection, MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'colorify',
    description: 'colorify someone',
    permission: ['SEND_MESSGAES'],
    ownerOnly: false,
    options: [
        {
            name: 'who',
            type: 'USER',
            description: 'User you want to',
            required: true
        },
        {
            name: 'color',
            type: 'STRING',
            description: 'Color',
            required: true
        }
    ],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args, message) => {
        const user = interaction.guild.members.cache.get(args[0]) || interaction.member;
        const avatar = user ? user.user.displayAvatarURL({ format: "png", size: 4096 }) : message.author.displayAvatarURL({ format: "png", size: 4096 })
        const color = user ? args[1] : args[2]
        const img = `https://api.popcat.xyz/colorify?image=${encodeURIComponent(avatar)}&color=${color}`
        const em = new MessageEmbed()
            .setColor(color.toUpperCase())
            .setImage(img)
        interaction.followUp({ embeds: [em] });
    }
}