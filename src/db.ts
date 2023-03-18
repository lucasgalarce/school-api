import { DataSource } from "typeorm";

import { Course } from "./entities/Course";
import { Student } from "./entities/Student";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "school-db",
  synchronize: true,
  // logging: true,
  entities: [Student, Course, User],
});
