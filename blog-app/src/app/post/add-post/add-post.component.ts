import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  user_id: number = 0;
  category_id: number = 0;
  title: string = '';
  view_count: number = 0;
  creation_date: string = '';
  is_published: string = '';
  content: string = '';
  constructor(public postService: PostService) {

  }
}
