import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreate } from './post-create/post-create';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly dialog = inject(MatDialog);

  openCreatePostDialog() {
    this.dialog.open(PostCreate);
  }
}
