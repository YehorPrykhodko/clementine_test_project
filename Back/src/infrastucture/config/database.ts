import { Sequelize } from "sequelize";
import { ENV_DB } from "./env.js";

export const sequelize = new Sequelize(
  ENV_DB.DATABASE,
  ENV_DB.USER,
  ENV_DB.PASSWORD,
  {
    host: ENV_DB.HOST,
    port: ENV_DB.PORT,
    dialect: "mysql",
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}