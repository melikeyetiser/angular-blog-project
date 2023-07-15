import { Component } from '@angular/core';
import { Posts } from 'src/app/blogInterfaces';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  
  constructor(public postService: PostService,
    private route: ActivatedRoute, private router: Router){
      
  }
}
