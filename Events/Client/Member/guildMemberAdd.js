const { MessageEmbed, WebhookClient, GuildMember, Message } = require('discord.js');

module.exports = {
  name: "guildMemberAdd",
  /**
   * 
   * @param {GuildMember} member 
   */
  execute(member) {
    const { user, guild} = member;

    member.roles.add("984211368376926211");

    const Welcomer = new WebhookClient({

    /*
     url webHooks = https://discord.com/api/webhooks/984743306409947178/WtNitUgfsE4wISRriPtPi4yyE7KjiphcZecWM9h1yde92_xWcbo_Cn1ckl4z2yT-zrPK */

      id: "984743306409947178",
      token: "WtNitUgfsE4wISRriPtPi4yyE7KjiphcZecWM9h1yde92_xWcbo_Cn1ckl4z2yT-zrPK",
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