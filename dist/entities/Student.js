"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Student_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../common/constants");
const Course_1 = require("./Course");
let Student = Student_1 = class Student extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Student.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: [constants_1.genderEnum.masc, constants_1.genderEnum.fem],
    }),
    __metadata("design:type", String)
], Student.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Course_1.Course, (course) => course.students),
    __metadata("design:type", Course_1.Course)
], Student.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Student_1),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Student.prototype, "siblings", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ select: false }),
    __metadata("design:type", Date)
], Student.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ select: false }),
    __metadata("design:type", Date)
], Student.prototype, "updatedAt", void 0);
Student = Student_1 = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
