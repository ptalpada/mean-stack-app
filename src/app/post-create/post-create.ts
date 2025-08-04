import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.scss'
})
export class PostCreate {

  postText: string = '';

  onAddPost() {
    
  }
}
