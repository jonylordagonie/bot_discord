const { MessageEmbed, WebhookClient, GuildMember, Message } = require('discord.js');
const { WelcomeId, WelcomeToken } = require("./config.json");

module.exports = {
  name: "guildMemberAdd",
  /**
   * 
   * @param {GuildMember} member 
   */
  execute(member) {
    console.log("ok")

    const { user, guild} = member;

    member.roles.add("984211368376926211");

    const Welcomer = new WebhookClient({

      id: WelcomeId,
      token: WelcomeToken,
    });

    const Welcome = new MessageEmbed()
      .setColor("AQUA")
      .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 512 }))
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `Bienvenue ${member} sur le serveur ${guild.name}\n
      Nous somment maintenant: ${guild.memberCount} membres !`
      )
      .setFooter(
        `ID: ${user.id}`
      );
    
    Welcomer.send({ embeds: [Welcome] });

  }
}