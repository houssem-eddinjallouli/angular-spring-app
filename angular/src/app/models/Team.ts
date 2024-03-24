import { Project } from "./project";
import { User } from "./user";

export interface Team {
    id: number;
    name: string;

    users: User[];
    Projects: Project[];

  }