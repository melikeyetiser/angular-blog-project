import { Component } from '@angular/core';
import { Posts } from '../blogInterfaces';
import { postList } from 'src/data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts : Posts[] = postList;
}
