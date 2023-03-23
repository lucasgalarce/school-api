"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
exports.default = (router) => {
    router.post("/auth/token", auth_controller_1.default.generateToken);
    router.get("/auth/me", auth_controller_1.default.me);
};
