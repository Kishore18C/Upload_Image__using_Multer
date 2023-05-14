import { Sequelize, DataTypes } from "sequelize";
import album from "./Gallery.js";

const sequelize = new Sequelize("gallery", "root", "password", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

async function database() {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  try {
    const response = await sequelize.sync({ alter: true });
    if (response) return console.log("Successfully synced the database...");
  } catch (error) {
    console.log(error);
  }
}

const Album = album(sequelize);

export { database, Album };