import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  imports: [ReactiveFormsModule, MatButton, MatInputModule, MatCardModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.scss'
})
export class PostCreateComponent {

  @Output() postCreated = new EventEmitter<Post>();
  fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onAddPost() {
    const post: Post = {
      title: this.form.value.title,
      content: this.form.value.content
    }
    this.postCreated.emit(post);
  }
}
