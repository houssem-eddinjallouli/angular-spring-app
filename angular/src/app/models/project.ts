import { Team } from "./Team";

export interface Project {
    id: number;
    name: string;
    creationdate: Date;
    deadline: Date;

    team: Team;
  }