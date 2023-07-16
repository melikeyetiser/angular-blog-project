import { Injectable } from '@angular/core';
import { postList } from 'src/data';
import { Posts } from '../blogInterfaces';
import { commentList } from 'src/data';
import { Comments } from '../blogInterfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Posts[] = postList;
  private postNumber: number = this.posts.length;

  private comments: Comments[] = commentList;
  private selectedPost_id: number = 0;

  constructor() { }

  addPost(user_id: number,category_id:number,title:string,view_count:number,
    creation_date:string,is_published1:string,content:string){
    const is_published2: boolean = is_published1 === 'true';
    const post: Posts = {
      post_id: 0,
      user_id: user_id,
      category_id: category_id,
      title: title,
      view_count: view_count,
      creation_date: creation_date,
      is_published: is_published2,
      content: content
    }
    this.posts.push(post);
  }
  
  updatePost(user_id: number,category_id:number,title:string,view_count:number,
    creation_date:string,is_published1:string,content:string){
      const _post = this.posts.find((_post: Posts) => {
        return _post.post_id == this.selectedPost_id;
      }); 
      const is_published2: boolean = is_published1 === 'true';
      if (_post) {
        _post.post_id = this.selectedPost_id;
        _post.user_id = user_id;
        _post.category_id = category_id;
        _post.title = title;
        _post.view_count = view_count;
        _post.creation_date = creation_date;
        _post.content = content;
        _post.is_published = is_published2;
      }
  }
  
  selectedPost(id:number){
    this.selectedPost_id = id;
  }
  deletePost(id: number) {
    const postIndex = this.posts.findIndex((_post: Posts) => {
      return _post.post_id == id;
    });

    if (this.getCommentsByPostID(id) == null) {
      this.posts.splice(postIndex, 1);
    } else {
      throw new Error("This user cannot be deleted!");
    }
  }
  getCommentsByPostID(id: number) {
    return this.comments.find((_comment: Comments) => {
      return _comment.post_id == id;
    });
  }
  getPostNumber() {
    return this.postNumber;
  }
  getPosts() {
    return this.posts;
  }
  getPostDetails(id: number){
    const _post = this.getPostByID(this.selectedPost_id);

    if (_post){
      const str: string = "Post Id: ";
    return str.concat(_post.post_id.toString(), ", User Id: ",_post.user_id.toString(), ", Category Id: ", _post.category_id.toString(),
    ", Title: ", _post.title, 
    ", Content: ", _post.content, ",\n View Count: ", _post.view_count.toString(), 
    ",\n Creation Date: ", _post.creation_date);


    }else return null;
  }

  getPostByID(id:number){
    const _post = this.posts.find((_post: Posts) => {
      return _post.post_id == id;
    }); 
    return _post;
  }


}
