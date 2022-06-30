const { Client } = require("discord.js")

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log("Le GalactiBot est prêt");
    client.user.setActivity("La Galactical", { type: "WATCHING" });
  },
};
