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
    this.calculateTotalPage();
  }

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;
  
  get isSliceable() {
    return this.comments.length >= 10;
  }

  private calculateTotalPage() {
    let totalPage = this.comments.length / this.pageSize;
    const remainingItems = this.comments.length % this.pageSize;
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
