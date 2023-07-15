import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../blogInterfaces';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  newUserID: number = 0;
  usersList: Users[] = [];
  user_id : number = this.userService.getUserNumber() + 1;

  newUser!: Users;

  username: string = '';
  email: string = '';
  creation_date: string = '';
  is_active: string = '';
  

  constructor(public userService: UserService,
    private route: ActivatedRoute, private router: Router){
      
  }
  

  ngOnInit(): void{
    this.usersList = this.userService.getUsers();
    this.newUserID = this.userService.getUserNumber();
  }


}
