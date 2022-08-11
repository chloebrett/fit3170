// Setting up the database connection
const knex = require("knex")();
const bookshelf = require("bookshelf")(knex);

// Defining models
const Unit = bookshelf.model("Unit", {
  tableName: "units",
});

module.exports = { Unit };
