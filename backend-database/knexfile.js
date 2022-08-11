/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "database-1.ciiaajwht9a8.ap-southeast-2.rds.amazonaws.com",
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
