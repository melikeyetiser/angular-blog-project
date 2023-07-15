import { Component } from '@angular/core';
import { Users } from '../blogInterfaces';
import { userList } from 'src/data';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: Users[] = userList;

  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService){
    

  }

  pageIndex: number = 0;
  pageSize: number = 15;

  isPreviousButtonDisabled: boolean = false;
  isNextButtonDisabled: boolean = false;
  
}
