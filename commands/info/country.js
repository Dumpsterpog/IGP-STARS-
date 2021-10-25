const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
module.exports = {
    name: "country", 
 run: async (client, message, args ) => {
      let blacklist = await db.fetch(`blacklist_${message.author.id}`);
  if (blacklist === "Blacklisted")return message.reply(`You are blacklisted from using the bot!`)
        axios.get(`https://restcountries.eu/rest/v2/name/${args.slice(0).join(" ")}?fullText=true`).then(function(res) {
            let { nativeName } = res.data[0].languages[0]; // Destructure the language object. Didnt destructure name as it was also had to be destructured in the currency
            let { code, name, symbol } = res.data[0].currencies[0]; // Destructure the currency object
            const embed = new MessageEmbed()
            .addFields(
                {name: "Name", value: res.data[0].name, inline: true},
                {name: "Capital", value: res.data[0].capital, inline: true},
                {name: "Region", value: res.data[0].region, inline: true},
                {name: "Sub Region", value: res.data[0].subregion, inline: true},
                {name: "Area", value: res.data[0].area.toString(), inline: true},
                {name: "Population", value: res.data[0].population.toString(), inline: true},
             
                {name: "Languages", value: res.data[0].languages[0].name + '\n' + 'Native Name: ' + nativeName, inline: true},
                {name: "Currency", value: 'Code: ' + code + '\n' + 'Name: ' + name + '\n' + 'Symbol: ' + symbol}
                )
                .setColor('BLUE')
                message.reply(embed)
        }).catch(e => message.reply('Oops ! something went wrong' ));
    }
}