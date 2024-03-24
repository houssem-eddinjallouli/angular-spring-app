import { Question } from "./question";
import { UserTest } from "./usertest";

export class Test {
    id!: number;
    title!:string;
    description!:string;
    image!:string;
    active!:boolean;
    userTests!:UserTest[];
    questions!:Question[];

  }