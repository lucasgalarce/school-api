"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const user_routes_1 = __importDefault(require("./user.routes"));
const student_routes_1 = __importDefault(require("./student.routes"));
const course_routes_1 = __importDefault(require("./course.routes"));
exports.default = () => {
    const router = (0, express_1.Router)();
    (0, auth_1.default)(router);
    (0, user_routes_1.default)(router);
    (0, student_routes_1.default)(router);
    (0, course_routes_1.default)(router);
    return router;
};
