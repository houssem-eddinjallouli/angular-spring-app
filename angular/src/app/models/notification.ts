import { User } from "./user";

export interface Notification {
    id: number;
    title: string;
    message: string;
    
    users: User[];
  }