import { Team } from "./Team";
import { Claim } from "./claim";
import { Notification } from "./notification";
import { Post } from "./post";
import { Project } from "./project";
import { Userstory } from "./userstory";

export class User {
    id!:number;
    first_name!:String;
    last_name!:String;
    birth_date!:String;
    gender!:String;
    address!:String;
    phone_number!:String;
    email!:string;
    password!:string;
    image!:string;
    status!:string;
    role!:string;
    barrcode!:string;
    enabled!:boolean;
    non_locked!:boolean;
    using_mfa!:boolean;
    created_date!:Date;
    notifications!: Notification[];
    Posts!: Post[];
    teams!: Team[];
    Projectproductowner!: Project[];
    Projectscrummaster!: Project[];
    Claims!: Claim[];
    UserStorys!: Userstory[];
  }