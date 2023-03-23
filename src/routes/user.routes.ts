import userController from "../controllers/user.controller";

export default (router) => {
  router.post("/users", userController.createUser);
};
