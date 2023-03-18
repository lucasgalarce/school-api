import { Router } from "express";
// import auth from "./auth";
import student from "./student.routes";
import course from "./course.routes";

export default () => {
  const router = Router();

  // auth(router);
  student(router);
  course(router);

  return router;
};
