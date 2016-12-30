
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {User} from "./index";
import {Router} from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  private loggedIn = false;
  redirectURL: string;
  loggedInUser:User;
     private authTimeOut = new Subject<User>();

    public tokenExpired = this.authTimeOut.asObservable();

  constructor(private http: Http,private router:Router) {
    //this.loggedIn = false;
    this.redirectURL='';
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.loggedInUser=JSON.parse(localStorage.getItem('profile'));
  }

  login(userName, password): string {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // return this.http
    //   .post(
    //     '/login', 
    //     JSON.stringify({ email, password }), 
    //     { headers }
    //   )
    //   .map(res => res.json())
    //   .map((res) => {
    //     if (res.success) {
    //       localStorage.setItem('auth_token', res.auth_token);
    //       this.loggedIn = true;
    //     }

    //     return res.success;
    //   });
    if (userName.toLowerCase() == password.toLowerCase()) {
      
      this.loggedIn = true;
      this.loggedInUser=new User();
      this.loggedInUser.firstName="John";
      this.loggedInUser.lastName="Doe";
      this.loggedInUser.role=userName;
       localStorage.setItem('profile', JSON.stringify(this.loggedInUser));
       localStorage.setItem('auth_token', 'testtoken');
       this.checkTokenExpired();
      return this.redirectURL;
    }
    else
      return null;
  }
  checkTokenExpired()
  {
    //send dummy timeout after 20 secs
      setTimeout(() => { this.authTimeOut.next(this.loggedInUser); }, 20000);
  }
  getAuthTokenHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return headers;
  }
  logout() {
    localStorage.removeItem('auth_token');
     localStorage.removeItem('profile');
    this.loggedIn = false;
    this.router.navigate(['/']);
    window.location.reload(false); 
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  isAdmin()
  {
    return this.loggedInUser != null && this.loggedInUser.role.toLowerCase() =="Admin".toLowerCase();
  }
}