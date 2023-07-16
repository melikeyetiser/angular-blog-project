import { Component } from '@angular/core';
import { commentList } from 'src/data';
import { Comments } from '../blogInterfaces';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments : Comments[] = commentList;

  constructor(public commentService: CommentService){
    
  }
}
