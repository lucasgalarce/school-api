"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const course_service_1 = __importDefault(require("../services/course.service"));
const courseController = {
    getCourses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.query.name;
                const courses = yield course_service_1.default.getCourses(name);
                return res.json(courses);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    getCourseById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const course = yield course_service_1.default.getCourseById(parseInt(id));
                return res.json(course);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    createCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            yield course_service_1.default.createCourse(name);
            return res.status(204).send();
        });
    },
    updateCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield course_service_1.default.updateCourse(parseInt(id), req.body);
                return res.sendStatus(204);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    deleteCourse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield course_service_1.default.deleteCourse(parseInt(id));
                return res.sendStatus(204);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
};
exports.default = courseController;
