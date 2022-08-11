// Setting up the database connection
const dbConfig = require('./knexfile.js');
const knex = require("knex")(dbConfig.development);
const bookshelf = require("bookshelf")(knex);

// Defining models
const Unit = bookshelf.model("Unit", {
  tableName: "units",
});

module.exports = { Unit };
