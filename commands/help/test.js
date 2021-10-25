  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "test",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> General Commands<a:OG_alert:867965908335865917> ')
.addField('userinfo',`<:reply:881114313450983434> sends user's info`,true)
.addField('ping',`<:reply:881114313450983434> sends bot ping`,true)
.addField('support',`<:reply:881114313450983434> sends support server link`,true)
.addField('avatar<user>','<:reply:881114313450983434> Get the avatar',true)
//.addField('invites<user>','<:reply:881114313450983434> Get the no of invites of a user')
//.addField('topinvites','<:reply:881114313450983434> Get the top users with top no of invites')
.addField('ascii','<:reply:881114313450983434> Convert a text to ascii',true)
.addField('country','<:reply:881114313450983434> Get info about a country',true)
.addField('Hack','<:reply:881114313450983434> Hack Someone ',true)
.addField('meme','<:reply:881114313450983434> Get some refreshing memes',true)
.addField('urban-dictionary','<:reply:881114313450983434> Get some info about a word',true)
.addField('userinfo<user>','<:reply:881114313450983434>Get users info',true)
.addField('status<user>','<:reply:881114313450983434>Get users status',true)
.addField('afk[reason]','<:reply:881114313450983434> Go afk!',true)
.addField('suggest','<:reply:881114313450983434> sends a suggestion to that server',true)
.addField('__Admin Features__','**Permission : Administrator**')
.addField('set-suggest','<:reply:881114313450983434> sets a suggestion channel')
.addField('reply[message id of suggestion]','<:reply:881114313450983434>reply to the suggestion')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
.setThumbnail(client.user.displayAvatarURL())
 return message.channel.send({ embeds: [embed] });
     }
}