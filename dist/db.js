"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Course_1 = require("./entities/Course");
const Student_1 = require("./entities/Student");
const User_1 = require("./entities/User");
const config_1 = require("./config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    // username: DB_USERNAME,
    // password: DB_PASSWORD,
    // database: DB_NAME,
    url: config_1.DATABASE_URL,
    synchronize: true,
    // logging: true,
    entities: [Student_1.Student, Course_1.Course, User_1.User],
});
