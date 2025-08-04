import { Component } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create";
import { Header } from "./header/header";
import { PostListComponent } from "./posts/post-list/post-list";

@Component({
  selector: 'app-root',
  imports: [PostCreateComponent, Header, PostListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  posts: {title: string, content: string}[] = [];

  onPostAdded(addedPost: { title: string; content: string; }) {
    this.posts.push(addedPost);
  }
}
