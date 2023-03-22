import { auth } from "../middlewares/auth";
import studentController from "../controllers/student.controller";

export default (router) => {
  router.get("/students", studentController.getStudents);
  router.get("/students/:id", studentController.getStudentById);
  router.post("/students", auth, studentController.createStudent);
  router.put("/students/:id", auth, studentController.updateStudent);
  router.delete("/students/:id", auth, studentController.deleteStudent);
};
