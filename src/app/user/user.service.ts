import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private http: HttpClient) {}

    private userName: string = 'Admin';
    
    mockUser: User = {
        userName: 'admin',
        password: '123456'
    } 

    login(user: User): boolean {
        if(user.userName == this.mockUser.userName && 
            user.password == this.mockUser.password) {
            localStorage.setItem('user', this.userName);
            return true;
        }
        return false;
    }

    isLogged() {        
        return localStorage.getItem('user');;
    }

    getUserName() {
        return this.userName;
    }
}
