const dbConfig = require('./dbconfig.json');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: dbConfig.host,
      user: "postgres",
      password: "postgres",
      database: "postgres",
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
