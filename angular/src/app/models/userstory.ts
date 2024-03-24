import { Claim } from "./claim";
import { Project } from "./project";
import { Task } from "./task";
import { User } from "./user";

export interface Userstory {
    id: number;
    name: string;
    description: string;
    priority: number;
    estimation: number;

    project: Project;
    Claim: Claim[];
    User: User;
    Tasks: Task[];
  }