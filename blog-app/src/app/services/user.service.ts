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
  public selectedUserID = 0;
  // flag denotes whether any user deletion operation is done yet. it is updated inside deleteUser method
  public flag = false;

  // initialize the user selection variable
  private selectedUser_name: string = '';

  findSelectedUserID() {
    const _user = this.users.find((_user: Users) => {
      return _user.username == this.selectedUser_name;
    });

    if(_user){
      this.selectedUserID = _user.user_id;
    }
  }

  constructor() {

  }

  addUser(username1: string, email1: string, creation_date1: string, is_active1: string): void {
    // convert string to boolean
    const is_active2: boolean = is_active1 === 'true';
    const user: Users = {
      user_id: this.getUserNumber(),
      username: username1,
      email: email1,
      creation_date: creation_date1,
      is_active: is_active2
    }
    // user id is automatically increasing with reference to the number of users
    user.user_id = this.userNumber + 1;
    this.userNumber++;
    this.users.push(user);
  }

  updateUser(username1: string, email1: string, creation_date1: string, is_active1: string): void {
    // gets the user with the given username
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

  // updates the user selection in the user details router to get the details
  selectedUser(name: string) {
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
    if (this.isUserDeletable(id)) {
      this.users.splice(userIndex, 1);
      this.flag = false;
    } else {
      this.flag = true; 
      throw new Error("This user cannot be deleted!");
      
    }
  }

  /* we determine whether the user has posts or comments or is the last user remaining
    we will call this method on the Delete User button on the user component to give a warning
  */
  isUserDeletable(id: number) {
    return this.getCommentsByUserID(id) == null &&
      this.getPostsByUserID(id) == null && userList.length != 1;
  }

  getUsers() {
    return this.users;
  }

  getUserNumber() {
    return this.userNumber;
  }
}
