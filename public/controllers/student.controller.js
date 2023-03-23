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
const student_service_1 = __importDefault(require("../services/student.service"));
const studentController = {
    getStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const firstname = req.query.firstname;
                const students = yield student_service_1.default.getStudents(firstname);
                return res.json(students);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const student = yield student_service_1.default.getStudentById(parseInt(id));
                return res.json(student);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, age, gender, courseId } = req.body;
            yield student_service_1.default.createStudent(firstname, lastname, age, gender, courseId);
            return res.status(204).send();
        });
    },
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield student_service_1.default.updateStudent(parseInt(id), req.body);
                return res.sendStatus(204);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
            }
        });
    },
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield student_service_1.default.deleteStudent(parseInt(id));
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
exports.default = studentController;
