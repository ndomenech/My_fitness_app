import { Component, OnInit } from '@angular/core';
import { User } from '../modules/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User: any;

    name:string;
    password: string;


    constructor( private router: Router) { }

    ngOnInit() {
    }

    login(){
        this.User.login(this.name, this.password)
    }
    loginFB(){
        this.User.loginFB();
    }

}
