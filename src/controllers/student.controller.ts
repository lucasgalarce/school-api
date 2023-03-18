import { Request, Response } from "express";

import studentService from "../services/student.service";
import { StudentBody } from "../types/Student.types";

const studentController = {
  async getStudents(req: Request, res: Response) {
    try {
      const students = await studentService.getStudents();
      return res.json(students);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async getStudentById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const student = await studentService.getStudentById(parseInt(id));
      return res.json(student);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async createStudent(
    req: Request<unknown, unknown, StudentBody>,
    res: Response
  ) {
    const { firstname, lastname, age, gender } = req.body;
    await studentService.createStudent(firstname, lastname, age, gender);
    return res.status(204).send();
  },

  async updateStudent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await studentService.updateStudent(parseInt(id), req.body);

      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteStudent(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await studentService.deleteStudent(parseInt(id));

      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  },
};

export default studentController;
