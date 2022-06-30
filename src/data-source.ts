import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import { config } from "dotenv";

config();

const appData = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
});

export default appData;
