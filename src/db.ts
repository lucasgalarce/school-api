import { DataSource } from "typeorm";

import { Course } from "./entities/Course";
import { Student } from "./entities/Student";
import { User } from "./entities/User";
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DATABASE_URL } from "./config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  // logging: true,
  entities: [Student, Course, User],
});
