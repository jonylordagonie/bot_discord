const { Events } = require('../Validation/EventNames');
const { promisify } = require("util");
const { glob } = require('glob');
const Ascii = require('ascii-table');
const PG = promisify(glob);

module.exports = async (client) => {
  const Table = new Ascii("Evennement chargé");

  (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
    const event = require(file);
    if (!Events.includes(event.name) || !event.name) {

      const L = file.split("/");
      await Table.addRow(`${event.name || "MANQUANT"}`, `📛 Le nom de l'événement est invalide ou manquant: ${L[6] + `/` + L[7]}`);
      return;
    }
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    };

    await Table.addRow(event.name, "✅ SUCCES");
  })

  console.log(Table.toString());
};