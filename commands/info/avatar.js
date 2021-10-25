const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
  name: "avatar",
  category:"info",
    aliases: [],
  run: async (client, message, args ) => {
    
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;
  let avs = new MessageEmbed()
      .setAuthor(
        `Avatar`,
        member.user.displayAvatarURL({ dynamic: true }),
      )
      .setColor('RANDOM')
      .addField(
        "❱ PNG",
        `[\`LINK\`](${member.user.displayAvatarURL({ format: "png" })})`,
        true
      )
      .addField(
        "❱ JPEG",
        `[\`LINK\`](${member.user.displayAvatarURL({ format: "jpg" })})`,
        true
      )
      .addField(
        "❱ WEBP",
        `[\`LINK\`](${member.user.displayAvatarURL({ format: "webp" })})`,
        true
      )
      .setURL(
        member.user.displayAvatarURL({
          dynamic: true,
        })
      )
      .setImage(
       member.user.displayAvatarURL({
          dynamic: true,
          size: 512,
        })
      );

      message.channel.send({embeds : [avs]})
  }
}
