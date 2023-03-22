import { FindManyOptions, FindOneOptions, Like } from "typeorm";

import { Student } from "../entities/Student";

const studentService = {
  async getStudents(firstname?: string) {
    const options: FindManyOptions = {
      relations: ["course", "siblings"],
      order: {
        id: "ASC",
      },
    };
    if (firstname) options.where = { firstname: Like(`%${firstname}%`) };

    return Student.find(options);
  },

  async getStudentById(id: number) {
    const options: FindOneOptions = {
      relations: ["course", "siblings"],
      where: {
        id,
      },
    };
    const student = await Student.findOne(options);
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

    student.firstname = firstname;
    student.lastname = lastname;
    student.age = age;
    student.gender = gender;

    return student.save();
  },

  async updateStudent(id: number, payload) {
    const student = await Student.findOneBy({ id });
    if (!student) throw new Error("Student not found");

    if (payload.siblingId) {
      const options: FindOneOptions = {
        relations: ["siblings"],
        where: {
          id: payload.siblingId,
        },
      };
      const newSibling = await Student.findOne(options);
      if (!newSibling) throw new Error("Sibling not found");
      student.siblings = [newSibling];
      student.save();

      newSibling.siblings = [student];
      newSibling.save();
      return;
    }
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
