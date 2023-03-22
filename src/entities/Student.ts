import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { genderEnum } from "../common/constants";
import { Course } from "./Course";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column({
    enum: [genderEnum.masc, genderEnum.fem],
  })
  gender: string;

  @ManyToOne(() => Course, (course: Course) => course.students)
  course: Course;

  @ManyToMany(() => Student)
  @JoinTable()
  siblings: Student[];

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
