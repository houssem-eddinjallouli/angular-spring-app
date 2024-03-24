import { Sprint } from "./sprint";
import { Userstory } from "./userstory";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    complexity: string;

    userstory: Userstory;
    sprint: Sprint;
  }