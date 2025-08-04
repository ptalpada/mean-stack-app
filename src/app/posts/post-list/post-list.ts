import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostListComponent implements OnInit, OnDestroy {
  
  posts: Post[] = [];
  postsService = inject(PostsService);
  private postSubscription: Subscription = new Subscription();
  
  ngOnInit(): void {
    this.posts = this.postsService.getPosts();

    this.postSubscription = this.postsService.getPostUpdate().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
