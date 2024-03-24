import { User } from "./user";

export interface Message {
    id: number;
    content: string;

    user: User;
  }