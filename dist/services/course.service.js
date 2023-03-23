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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Course_1 = require("../entities/Course");
const coursesService = {
    getCourses(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                relations: ["students"],
                order: {
                    id: "ASC",
                },
            };
            if (name)
                options.where = { name: (0, typeorm_1.Like)(`%${name}%`) };
            return Course_1.Course.find(options);
        });
    },
    getCourseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                where: { id },
                relations: ["students", "students.siblings"],
            };
            const course = yield Course_1.Course.findOne(options);
            if (!course)
                throw new Error("Course not found");
            return course;
        });
    },
    getCourseByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return Course_1.Course.findOneBy({ name });
        });
    },
    createCourse(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = new Course_1.Course();
            // const hashedPass = await bcrypt.hash(password, 10);
            course.name = name;
            // user.password = hashedPass;
            return course.save();
        });
    },
    updateCourse(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield Course_1.Course.findOneBy({ id });
            if (!course)
                throw new Error("Course not found");
            yield Course_1.Course.update({ id }, payload);
            return course;
        });
    },
    deleteCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Course_1.Course.delete({ id });
            if (result.affected === 0)
                throw new Error("Course not found");
            return result;
        });
    },
};
exports.default = coursesService;
