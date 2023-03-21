import { Request, Response } from "express";

import courseService from "../services/course.service";
import { CourseBody } from "../types/Course.types";

const courseController = {
  async getCourses(req: Request, res: Response) {
    try {
      const name = req.query.name as string;
      const courses = await courseService.getCourses(name);
      return res.json(courses);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async getCourseById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const course = await courseService.getCourseById(parseInt(id));
      return res.json(course);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async createCourse(
    req: Request<unknown, unknown, CourseBody>,
    res: Response
  ) {
    const { name } = req.body;
    await courseService.createCourse(name);
    return res.status(204).send();
  },

  async updateCourse(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await courseService.updateCourse(parseInt(id), req.body);

      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteCourse(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await courseService.deleteCourse(parseInt(id));

      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },
};

export default courseController;
