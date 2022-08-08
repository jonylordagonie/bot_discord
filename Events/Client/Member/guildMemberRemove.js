const { MessageEmbed, WebhookClient, GuildMember, Message } = require('discord.js');
const { ByeId, ByeToken } = require("./config.json");

module.exports = {
  name: "guildMemberRemove",
  /**
   * 
   * @param {GuildMember} member 
   */
  execute(member) {
    const { user, guild, message } = member;

    const Byemer = new WebhookClient({

      id: ByeId,
      token: ByeToken,
    });

    const Goodbye = new MessageEmbed()
      .setTitle("Aurevoir")
      .setImage(user.avatarURL())
      .addFields({ name: `${user.tag}` });
    
    Byemer.send({ embeds: [Goodbye] });
  }
}