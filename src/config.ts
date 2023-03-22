import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";
export const DB_NAME = process.env.DB_NAME;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
