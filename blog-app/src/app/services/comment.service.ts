import { Injectable } from '@angular/core';
import { Comments } from '../blogInterfaces';
import { commentList } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comments[] = commentList;
  private maxCommentID: number = this.comments.length + 1;
  private selectedComment_id: number = 0;

  constructor() { }

  // we update comment selection regularly on the button actions
  selectComment(id: number) {
    this.selectedComment_id = id;
  }

  addComment(post_id: number, user_id: number,
    comment: string, creation_date: string, is_confirmed1: string) {
    const is_confirmed: boolean = is_confirmed1 === 'true';

    const newComment: Comments = {
      comment_id: this.getCommentNumber(),
      post_id: post_id,
      user_id: user_id,
      comment: comment,
      creation_date: creation_date,
      is_confirmed: is_confirmed
    }
    this.comments.push(newComment);
  }

  // determining an ID number for a new comment
  getCommentNumber() {
    return this.comments.length + 1;
  }

  deleteComment(id: number) {
    const commentIndex = this.comments.findIndex((_comment: Comments) => {
      return _comment.comment_id == id;
    });

    this.comments.splice(commentIndex, 1);

  }
  // get comment details as a string using the comment id
  getCommentDetails() {
    const _post = this.getCommentByID(this.selectedComment_id);

    if (_post) {
      const str: string = "Comment Id: ";
      return str.concat(_post.comment_id.toString(), ", Post Id: ", _post.post_id.toString(),
        ", Comment: ", _post.comment);
    } else return null;
  }


  // this method is to find the details of a comment belonging to a given post
  // it is used to list the comments under a post in the post-details page
  getCommentDetailsByPostID(post_id: number) {
    const _post = this.getCommentByPostID(post_id);

    if (_post) {
      const str: string = "Comment Id: ";
      return str.concat(_post.comment_id.toString(), ", Post Id: ", _post.post_id.toString(),
        ", Comment: ", _post.comment);
    } else return null;
  }

  getCommentByID(id: number) {
    const _comment = this.comments.find((_comment: Comments) => {
      return _comment.comment_id == id;
    });
    return _comment;
  }

  getCommentByPostID(postID: number) {
    const _comment = this.comments.find((_comment: Comments) => {
      return _comment.post_id == postID;
    });
    return _comment;
  }
}
