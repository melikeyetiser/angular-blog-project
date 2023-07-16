import { Injectable } from '@angular/core';
import { Comments } from '../blogInterfaces';
import { commentList } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comments[] = commentList;
  private maxCommentID : number = this.comments.length + 1;
  private selectedComment_id: number = 0;

  constructor() { }

  addComment(post_id: number,user_id:number,
    comment:string,creation_date:string,is_confirmed1:string){
    const is_confirmed: boolean = is_confirmed1 === 'true';

    const newComment: Comments = {
      comment_id : this.getCommentNumber(),
      post_id: post_id,
      user_id: user_id,
      comment: comment,
      creation_date: creation_date,
      is_confirmed: is_confirmed
    }
    this.comments.push(newComment);
  }

  getCommentNumber(){
    return this.comments.length + 1;
  }

  deleteComment(id:number){
    const commentIndex = this.comments.findIndex((_comment: Comments) => {
      return _comment.comment_id == id;
    });

      this.comments.splice(commentIndex, 1);
    
  }

}
