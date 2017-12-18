import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Lists, User,} from '../modules/user';
import { UserService } from '../modules/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  list = new Lists();
  me: User;

  
  constructor() { }

  ngOnInit() {
    if(this.User.me == null){
      this.router.navigate(['/login']);
  }
  this.me = this.User.me;
  setInterval(()=> this.update(), 1000)
  }

}


