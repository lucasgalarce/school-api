import { FindManyOptions, Like } from "typeorm";

import { Course } from "../entities/Course";

const coursesService = {
  async getCourses(name?: string) {
    const options: FindManyOptions = {
      relations: ["students"],
      order: {
        id: "ASC",
      },
    };
    if (name) options.where = { name: Like(`%${name}%`) };
    return Course.find(options);
  },

  async getCourseById(id: number) {
    const options = {
      where: { id },
      relations: ["students", "students.siblings"],
    };

    const course = await Course.findOne(options);
    if (!course) throw new Error("Course not found");
    return course;
  },

  async getCourseByName(name: string) {
    return Course.findOneBy({ name });
  },

  async createCourse(name: string) {
    const course = new Course();
    // const hashedPass = await bcrypt.hash(password, 10);

    course.name = name;

    // user.password = hashedPass;

    return course.save();
  },

  async updateCourse(id: number, payload) {
    const course = await Course.findOneBy({ id });
    if (!course) throw new Error("Course not found");

    await Course.update({ id }, payload);
    return course;
  },

  async deleteCourse(id: number) {
    const result = await Course.delete({ id });
    if (result.affected === 0) throw new Error("Course not found");
    return result;
  },
};

export default coursesService;
