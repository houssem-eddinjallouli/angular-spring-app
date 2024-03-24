import { Post } from "./post";
import { User } from "./user";

export interface Comment {
    id: number;
    content: string;
    
    post: Post;
    user: User;
  }