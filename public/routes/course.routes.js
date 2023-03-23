"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middlewares/auth");
const course_controller_1 = __importDefault(require("../controllers/course.controller"));
exports.default = (router) => {
    router.get("/courses", course_controller_1.default.getCourses);
    router.get("/courses/:id", course_controller_1.default.getCourseById);
    router.post("/courses", auth_1.auth, course_controller_1.default.createCourse);
    router.put("/courses/:id", auth_1.auth, course_controller_1.default.updateCourse);
    router.delete("/courses/:id", auth_1.auth, course_controller_1.default.deleteCourse);
};
