// import { auth } from "../middlewares/auth";
import studentController from "../controllers/student.controller";

export default (router) => {
  router.get("/students", studentController.getStudents);
  router.get("/students/:id", studentController.getStudentById);
  router.post("/students", studentController.createStudent);
  router.put("/students/:id", studentController.updateStudent);
  router.delete("/students/:id", studentController.deleteStudent);
};
