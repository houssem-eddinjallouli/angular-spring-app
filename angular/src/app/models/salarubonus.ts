import { User } from "./user";
import { Userstory } from "./userstory";

export interface SalaryBonus {
    id: number;
    value: number;
    
    userstory: Userstory;
    user: User;
  }