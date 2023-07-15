import { Component } from '@angular/core';
import { Posts } from '../blogInterfaces';
import { postList } from 'src/data';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts : Posts[] = postList;
  constructor(public postService: PostService){}
}
