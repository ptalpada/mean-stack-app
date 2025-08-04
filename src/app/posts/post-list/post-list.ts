import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostListComponent {

  @Input() posts: Post[] = [];;
}
