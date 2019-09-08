import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
import { User } from '../user/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthGuardService,
        private router: Router) { }

    ngOnInit(): void {
        if(localStorage.getItem('user'))
            this.router.navigate(['dragons']);
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });  
    } 

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        let newUser: User = {
            'userName': userName,
            'password': password
        }

        const res = this.authService.authenticate(newUser);
        if(res) {            
            this.router.navigate(['dragons'])
        }
        console.log(newUser)
        console.log(res)
    }

}
