import { Component } from '@angular/core';
import { Users } from '../blogInterfaces';
import { userList } from 'src/data';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: Users[] = userList;


  // pagination
  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(public userService: UserService) {
    this.calculateTotalPage();
  }

  
  get isSliceable() {
    return this.users.length >= 10;
  }

  private calculateTotalPage() {
    let totalPage = this.users.length / this.pageSize;
    const remainingItems = this.users.length % this.pageSize;
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