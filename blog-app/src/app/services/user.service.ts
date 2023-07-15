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
  private userNumber: number = this.users.length;
  private selectedUser_name: string = '';

  constructor() {

  }

  addUser(username1: string, email1: string, creation_date1: string, is_active1: string): void {

    const is_active2: boolean = is_active1 === 'true';
    const user: Users = {
      user_id: this.getUserNumber(),
      username: username1,
      email: email1,
      creation_date: creation_date1,
      is_active: is_active2
    }
    user.user_id = this.userNumber + 1;
    this.userNumber++;
    this.users.push(user);
  }

  updateUser(username1: string, email1: string, creation_date1: string, is_active1: string): void {
    const _user = this.users.find((_user: Users) => {
      return _user.username == this.selectedUser_name;
    });

    const is_active2: boolean = is_active1 === 'true';
    if (_user) {
      _user.username = username1;
      _user.email = email1;
      _user.is_active = is_active2;
      _user.creation_date = creation_date1;
    }
  }
  selectedUser(name: string){
    this.selectedUser_name = name;
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

    if (this.getCommentsByUserID(id) == null &&
      this.getPostsByUserID(id) == null && userList.length != 1) {
      this.users.splice(userIndex, 1);
    } else {
      throw new Error("This user cannot be deleted!");
    }
  }

  getUsers() {
    return this.users;
  }

  getUserNumber() {
    return this.userNumber;
  }
}
