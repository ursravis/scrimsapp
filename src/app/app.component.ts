/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { UserService } from './shared/index';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
      '../assets/css/modular-vendor.css',
    '../assets/css/modular-admin.css',
    '../assets/css/toggle-switch.css'
   

  ],
    templateUrl: './app.html'
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(private userService:UserService) {
    console.log("app component");
this.userService.tokenExpired.subscribe(user=>{
  //document.getElementById("logoutModalButton").click();
});
  }

  ngOnInit() {
    console.log("app component");
  }

}


