import { Router } from "express";
// import auth from "./auth";
import student from "./student.routes";

export default () => {
  const router = Router();

  // auth(router);
  student(router);

  return router;
};
