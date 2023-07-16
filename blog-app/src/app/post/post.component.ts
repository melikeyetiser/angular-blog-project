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
  constructor(public postService: PostService){
    this.calculateTotalPage();
  }
  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;
  
  get isSliceable() {
    return this.posts.length >= 10;
  }

  private calculateTotalPage() {
    let totalPage = this.posts.length / this.pageSize;
    const remainingItems = this.posts.length % this.pageSize;
    if (remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  handlePreviousPageButton() {
    if (this.pageIndex > 0) {
      this.pageIndex = this.pageIndex - 1;
    }
  }

  handleNextPageButton() {
    if (this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }
}
