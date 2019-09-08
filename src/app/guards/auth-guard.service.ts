import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate() {
        if(!this.userService.isLogged()){
            this.router.navigate(['']);
            return false;
        }      
        return true;
    }

    authenticate(user: User): boolean {
        return this.userService.login(user);
    }
}