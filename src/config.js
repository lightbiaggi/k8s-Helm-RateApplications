/**
 * Reading Environment Variables
 */
import { config } from "dotenv";
config();

export default {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "lbiaggi",
    password: process.env.DATABASE_PASSWORD || "nimnim",
    database: process.env.DATABASE_NAME || "dblinks",
  },
  port: process.env.PORT || 4000,
};
