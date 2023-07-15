import { Component } from '@angular/core';
import { commentList } from 'src/data';
import { Comments } from '../blogInterfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  comments : Comments[] = commentList;
}
