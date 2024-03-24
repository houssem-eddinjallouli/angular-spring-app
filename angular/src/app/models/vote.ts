import { User } from "./user";
import { Userstory } from "./userstory";

export interface Vote {
    id: number;
    value: number;
    retrospective: string;

    userstory: Userstory;
    User: User
  }