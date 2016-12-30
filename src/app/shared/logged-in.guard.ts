
import { Injectable } from '@angular/core';
import { Router,Route, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,CanLoad } from '@angular/router';
import { UserService } from './index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate,CanLoad {
  constructor(private userService: UserService,private router:Router) {
 
  }

  // canActivate() {
  //   return this.user.isLoggedIn();
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (state.url !== '/login' && !this.userService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
     
  canLoad(route: Route): boolean {
    let url = route.path;
    this.userService.redirectURL=url;
        if ( !this.userService.isLoggedIn() ) {
            this.router.navigate(['/login']);
            return false;
        }       

        return true;
    }
}