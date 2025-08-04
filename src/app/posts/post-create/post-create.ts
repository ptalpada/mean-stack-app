import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-post-create',
  imports: [FormsModule, MatButton, MatInputModule, MatCardModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.scss'
})
export class PostCreateComponent {

  enteredTitle: string = '';
  enteredContent: string = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }
}
