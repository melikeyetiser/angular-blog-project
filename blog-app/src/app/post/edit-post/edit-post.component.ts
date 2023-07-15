import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Posts } from 'src/app/blogInterfaces';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  newPostID: number = 0;
  postsList: Posts[] = [];

  user_id: number = 0;
  category_id: number = 0;
  title: string = '';
  view_count: number = 0;
  creation_date: string = '';
  is_published: string = '';
  content: string = '';


  constructor(public postService: PostService,
    private route: ActivatedRoute, private router: Router){
      
  }
  

  ngOnInit(): void{
    this.postsList = this.postService.getPosts();
    this.newPostID = this.postService.getPostNumber();
  }
}
