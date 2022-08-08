const { CommandInteraction, Client } = require('discord.js');

module.exports = {
  name: "emit",
  description: "Permet de forcer une commande",
  permission: "ADMINISTRATOR",
  options: [
    {
      name: "member",
      description: "Evenement du serveur en rapport avec les membres",
      type: "STRING",
      required: true,
      choices: [
        {
          name: "guildMemberAdd",
          value: "guildMemberAdd",
        },
        {
          name: "guildMemberRemove",
          value: "guildMemberRemove",
        },
        {
          name: "ping",
          value: "ping",
        },
      ],
    },
  ],
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    const choices = interaction.options.getString("member");

    switch (choices) {
      case "guildMemberAdd":
        {
          client.emit("guildMemberAdd", interaction.member);
          interaction.reply({
            content: "Emet l'évènement d'une arrivée",
            ephemeral: true,
          });
        }
        break;
      case "guildMemberRemove":
        {
          client.emit("guildMemberRemove", interaction.member);
          interaction.reply({
            content: "Emet l'évènement d'une départ",
            ephemeral: true,
          });
        }
        break;
      case "ping":
        {
          client.emit("ping");
        }
        break;
    }
  },
};