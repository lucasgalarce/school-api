// import { auth } from "../middlewares/auth";
import userController from "../controllers/user.controller";

export default (router) => {
  router.get("/users", userController.hello);
  router.post("/users", userController.createUser);
};
