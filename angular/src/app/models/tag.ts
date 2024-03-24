import { Post } from "./post";

export interface Tag {
    id: number;
    name: string;
    
    posts: Post[];
  }