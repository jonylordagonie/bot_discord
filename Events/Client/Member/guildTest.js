const { Client } = require("discord.js");

module.exports = {
  name: "guildTest",
  once: false,
  /**
   *
   * @param {Client} client
   */
  execute(client, member) {
    console.log("test fini");
  },
};
