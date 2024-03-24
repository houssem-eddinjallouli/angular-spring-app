import { Task } from "./task";

export interface Sprint {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    status: string;
    velocity: number;
    retrospective: string;

    Tasks: Task[];
  }