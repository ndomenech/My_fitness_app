import { Component, OnInit } from '@angular/core';
import { UserService } from '../modules/user.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  name: string;
  password: string;


  constructor(private router: Router) { }

  ngOnInit() {
  }

}

