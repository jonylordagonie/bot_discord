const { MessageEmbed, WebhookClient, GuildMember, Message } = require('discord.js');

module.exports = {
  name: "guildMemberRemove",
  /**
   * 
   * @param {GuildMember} member 
   */
  execute(member) {
    const { user, guild, message } = member;

    const Byemer = new WebhookClient({
      /* https://discord.com/api/webhooks/984824463860314122/hka2lDLsWRz8ZX33Ke6YuyE9RPxkm0JHKjvm8PpsmIimqjYdl3389j1-WO6I5ACujdE3 */

      id: "984824463860314122",
      token:
        "984824463860314122/hka2lDLsWRz8ZX33Ke6YuyE9RPxkm0JHKjvm8PpsmIimqjYdl3389j1-WO6I5ACujdE3",
    });

    const Goodbye = new MessageEmbed()
      .setTitle("Aurevoir")
      .setImage(user.avatarURL())
      .addFields({ name: `${user.tag}` });
    
    Byemer.send({ embeds: [Goodbye] });
  }
}