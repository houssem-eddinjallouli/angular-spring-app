import { Session } from "./session";

export interface Feedback {
    id: number;
    value: number;
    message: string;

    session: Session;
  }