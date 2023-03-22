import { auth } from "../middlewares/auth";
import courseController from "../controllers/course.controller";

export default (router) => {
  router.get("/courses", courseController.getCourses);
  router.get("/courses/:id", courseController.getCourseById);
  router.post("/courses", auth, courseController.createCourse);
  router.put("/courses/:id", courseController.updateCourse);
  router.delete("/courses/:id", courseController.deleteCourse);
};
