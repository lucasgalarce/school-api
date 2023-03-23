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
const typeorm_1 = require("typeorm");
const Student_1 = require("../entities/Student");
const course_service_1 = __importDefault(require("./course.service"));
const studentService = {
    getStudents(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                relations: ["course", "siblings"],
                order: {
                    id: "ASC",
                },
            };
            if (firstname)
                options.where = { firstname: (0, typeorm_1.Like)(`%${firstname}%`) };
            return Student_1.Student.find(options);
        });
    },
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                relations: ["course", "siblings"],
                where: {
                    id,
                },
            };
            const student = yield Student_1.Student.findOne(options);
            if (!student)
                throw new Error("Student not found");
            return student;
        });
    },
    getStudentByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return Student_1.Student.findOneBy({ firstname: name });
        });
    },
    createStudent(firstname, lastname, age, gender, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new Student_1.Student();
            student.firstname = firstname;
            student.lastname = lastname;
            student.age = age;
            student.gender = gender;
            if (courseId) {
                const course = yield course_service_1.default.getCourseById(courseId);
                student.course = course;
            }
            return student.save();
        });
    },
    updateStudent(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield Student_1.Student.findOneBy({ id });
            if (!student)
                throw new Error("Student not found");
            if (payload.siblingId) {
                const options = {
                    relations: ["siblings"],
                    where: {
                        id: payload.siblingId,
                    },
                };
                const newSibling = yield Student_1.Student.findOne(options);
                if (!newSibling)
                    throw new Error("Sibling not found");
                student.siblings = [newSibling];
                student.save();
                newSibling.siblings = [student];
                newSibling.save();
                return;
            }
            yield Student_1.Student.update({ id }, payload);
            return student;
        });
    },
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Student_1.Student.delete({ id });
            if (result.affected === 0)
                throw new Error("Student not found");
            return result;
        });
    },
};
exports.default = studentService;
