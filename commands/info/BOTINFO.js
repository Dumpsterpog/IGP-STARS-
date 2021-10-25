const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const moment = require('moment');
const { stripIndent } = require('common-tags');
const {
    version
} = require("discord.js");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")


module.exports = {
  name: 'stats',
  aliases: ['botinfo'],
    run: async (client, message, args) => {
        
 let cpuLol;
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
            const botinfo = new Discord.MessageEmbed()
                .setAuthor(message.client.user.username)
                .setTitle("__**Stats:**__")
                .setColor("RANDOM")
                
               
                .addField("`📁` Users", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`, true)
                .addField("`📁` Servers", `${message.client.guilds.cache.size}`, true)
                .addField("`📁` Channels ", `${message.client.channels.cache.size}`, true)
                .addField("`👾` Discord.js", `v${version}`, true)
                .addField("`🤖` Node", `${process.version}`, true)
                
                
              
                .addField("API Latency", `${(message.client.ws.ping)}ms`)
    message.channel.send({embeds : [botinfo]})
        });
    }
}