const { DataSource } = require("typeorm");
require("dotenv/config");

module.exports = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrationsTableName: process.env.DB_MIGRATION_TABLE,
    entities: ["dist/**/*.model.js"],
});
