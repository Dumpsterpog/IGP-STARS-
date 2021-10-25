const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "returns commands of the bot ",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
 let embed = new Discord.MessageEmbed()
 .setTitle(`:books:Slash-Commands!`)
 .addField('Activity','/activity [voice-channel][activity]')
.addField('Fun','/cleverrate\n/meme\n/remind\n/anime[options]')
.addField('Games','/8ball[Question]')
.addField('Image-Generation','/drake[word 1][word 2]\n/colorify[user][color]')
.addField('Info','/gif[word]\n/invite\n/google[query]\n/serverinfo') 
   
 interaction.followUp({ content: 'help command' , embeds: [embed] });
    },
};