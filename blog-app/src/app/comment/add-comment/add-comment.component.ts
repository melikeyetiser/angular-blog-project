import { Component } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  user_id!: number;
  post_id!: number;
  creation_date: string = '';
  comment_id : string = '';
  is_confirmed: string = '';
  comment: string = '';

  constructor(public commentService: CommentService) {
  }
}
