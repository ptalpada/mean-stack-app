import { Component } from '@angular/core';
import { PostCreateComponent } from "./posts/post-create/post-create";
import { Header } from "./header/header";
import { PostListComponent } from "./posts/post-list/post-list";
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  imports: [PostCreateComponent, Header, PostListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  storedPosts: Post[] = [];

  onPostAdded(addedPost: { title: string; content: string; }) {
    this.storedPosts.push(addedPost);
  }
}
