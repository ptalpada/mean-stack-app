import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postCreated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdate() {
    return this.postCreated.asObservable();
  }

  addPost(data: Post) {
    this.posts.push(data);
    this.postCreated.next([...this.posts]);
  }
}