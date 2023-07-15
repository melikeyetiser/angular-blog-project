import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Users } from '../blogInterfaces';
import { userList } from 'src/data';
import { UserComponent } from '../user/user.component';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser!: Users;
  user_id : number = userList.length + 1;

  username: string = '';
  email: string = '';
  creation_date: string = '';
  is_active?: boolean;

  constructor(private userService: UserService,
    private route: ActivatedRoute, private router: Router){
    
    


  }

}
