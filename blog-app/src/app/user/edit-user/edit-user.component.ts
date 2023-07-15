import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/blogInterfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

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
