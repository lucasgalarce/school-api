"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_NAME = exports.JWT_SECRET_KEY = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 3000;
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";
exports.DB_NAME = process.env.DB_NAME;
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DATABASE_URL = process.env.DATABASE_URL;
