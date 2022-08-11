// Setting up the database connection
const knexConfig = require('./knexfile.js');
const knex = require("knex")({ ...knexConfig.development, debug: true, });
const bookshelf = require("bookshelf")(knex);

// Defining models
const Unit = bookshelf.model("Unit", {
  tableName: "units",
});

module.exports = { Unit };
