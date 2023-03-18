import { FindManyOptions } from "typeorm";
import bcrypt from "bcrypt";

import { Student } from "../entities/Student";

const studentService = {
  async getStudents() {
    const options: FindManyOptions = {
      order: {
        id: "ASC",
      },
    };
    return Student.find(options);
  },

  async getStudentById(id: number) {
    const student = await Student.findOneBy({ id });
    if (!student) throw new Error("Student not found");
    return student;
  },

  async getStudentByName(name: string) {
    return Student.findOneBy({ firstname: name });
  },

  async createStudent(
    firstname: string,
    lastname: string,
    age: number,
    gender: string
  ) {
    const student = new Student();
    // const hashedPass = await bcrypt.hash(password, 10);

    student.firstname = firstname;
    student.lastname = lastname;
    student.age = age;
    student.gender = gender;

    // user.password = hashedPass;

    return student.save();
  },

  async updateStudent(id: number, payload) {
    const student = await Student.findOneBy({ id });
    if (!student) throw new Error("Student not found");

    await Student.update({ id }, payload);
    return student;
  },

  async deleteStudent(id: number) {
    const result = await Student.delete({ id });
    if (result.affected === 0) throw new Error("Student not found");
    return result;
  },
};

export default studentService;
