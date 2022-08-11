// Setting up the database connection
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "database-1.ciiaajwht9a8.ap-southeast-2.rds.amazonaws.com",
    user: "postgres",
    password: "postgres",
    database: "postgres",
    charset: "utf8",
  },
});
const bookshelf = require("bookshelf")(knex);

// Defining models
const Unit = bookshelf.model("Unit", {
  tableName: "units",
});

module.exports = { Unit };
