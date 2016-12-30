
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService ,User} from '../shared/index';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user:User;
  constructor(private userService: UserService, private router: Router) {
    this.user=new User();
    this.user.userName="Admin";
    this.user.password="Admin";
  }

  onSubmit():void {
    // this.userService.login(email, password).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // });
   var result= this.userService.login(this.user.userName, this.user.password);
   if (result != null) {
        this.router.navigate([result]);
      }

  }
}