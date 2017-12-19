import { Component, OnInit } from '@angular/core';
import { UserService } from '../modules/user.services';
import { User } from '../modules/user';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    [x: string]: any;

    name:string;
    password: string;


    constructor(private user: UserService, private router: Router) { }

    ngOnInit() {
    }

    login(){
        this.user.login(this.name, this.password)
    }
    loginFB(){
        this.user.loginFB();
    }

}
