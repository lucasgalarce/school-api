import authController from "../controllers/auth.controller";

export default (router) => {
  router.post("/auth/token", authController.generateToken);
  router.get("/auth/me", authController.me);
};
