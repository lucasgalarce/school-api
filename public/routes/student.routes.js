"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../middlewares/auth");
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
exports.default = (router) => {
    router.get("/students", student_controller_1.default.getStudents);
    router.get("/students/:id", student_controller_1.default.getStudentById);
    router.post("/students", auth_1.auth, student_controller_1.default.createStudent);
    router.put("/students/:id", auth_1.auth, student_controller_1.default.updateStudent);
    router.delete("/students/:id", auth_1.auth, student_controller_1.default.deleteStudent);
};
