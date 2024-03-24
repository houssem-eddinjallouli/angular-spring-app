import { Card } from "./card";
import { Feedback } from "./feedback";
import { Message } from "./message";
import { Project } from "./project";

export interface Session {
    id: number;
    name: string;
    date: Date;
    time: string;
    isclosed: boolean;
    code: number;
    url: string;

    messages: Message[];
    card: Card;
    feedBacks: Feedback[];
    project: Project;
  }