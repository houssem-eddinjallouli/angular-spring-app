import { User } from "./user";
import { Userstory } from "./userstory";

export interface Claim {
    id: number;
    title: string;
    content: number;
    image: string;
    employeeCode: string;

    userstory: Userstory;
    user: User;
  }