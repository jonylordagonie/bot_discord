const { Client, CommandInteraction } = require('discord.js');

module.exports = {
  name: "ping",
  description: "Temps de réaction du bot",
  permission: "ADMINISTRATOR",
  /**
   *
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction, client) {
    interaction.reply({
      content: `Pong ! J'ai mis: ${client.ws.ping}ms pour répondre`,
    });
  },
};