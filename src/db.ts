import { DataSource } from "typeorm";
import { Student } from "./entities/Student";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "school-db",
  synchronize: true,
  // logging: true,
  entities: [Student],
});
