// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "C:/database.db",
    },
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "C:/database.db",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "C:/database.db",
    },
  },
};
