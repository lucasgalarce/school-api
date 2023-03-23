"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { auth } from "../middlewares/auth";
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.default = (router) => {
    router.get("/users", user_controller_1.default.hello);
    router.post("/users", user_controller_1.default.createUser);
};
