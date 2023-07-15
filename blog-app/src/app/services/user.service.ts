import { Injectable } from '@angular/core';
import { Users } from '../blogInterfaces';
import { userList } from 'src/data';
import { Posts } from '../blogInterfaces';
import { postList } from 'src/data';
import { Comments } from '../blogInterfaces';
import { commentList } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Users[] = userList;
  private posts: Posts[] = postList;
  private comments: Comments[] = commentList;

  constructor() { }

  addUser(user: Users): void {
    user.user_id = userList.length + 1;
    this.users.push(user);
  }

  updateUser(id: number, user: Users): void {
    const _user = this.users.find((_user: Users) => {
      return _user.user_id == id;
    });

    if (_user) {
      _user.username = user.username;
      _user.email = user.email;
      _user.is_active = user.is_active;
      _user.creation_date = user.creation_date;
    }
  }

  getUserByID(id: number): Users | undefined {
    return this.users.find((_user: Users) => {
      return _user.user_id == id;
    });
  }

  getCommentsByUserID(id: number) {
    return this.comments.find((_comment: Comments) => {
      return _comment.user_id == id;
    });
  }

  getPostsByUserID(id: number) {
    return this.posts.find((_post: Posts) => {
      return _post.user_id == id;
    });
  }

  deleteUser(id: number) {
    const userIndex = this.users.findIndex((_user: Users) => {
      return _user.user_id == id;
    });

    if (this.getCommentsByUserID(id) != null &&
      this.getPostsByUserID(id) != null && userList.length != 1) {
      this.users.splice(userIndex, 1);
    } else {
      throw new Error("This user cannot be deleted!");
    }
  }

}
