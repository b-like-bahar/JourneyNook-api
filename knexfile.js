import "dotenv/config";

export default {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DBNAME,
      charset: "utf8",
    },
  },
  production: {
    client: "mysql2",
    connection: process.env.JAWSDB_URL,
    charset: "utf8",
  },
};

