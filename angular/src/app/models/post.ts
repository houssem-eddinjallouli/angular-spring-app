import { Comment } from "./comment";
import { Tag } from "./tag";
import { User } from "./user";

export interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    video: string;
    date: Date;
    message: string;

    tags: Tag[];
    comments: Comment[];

    likes: number;
    dislikes: number;

    user: User;
  }