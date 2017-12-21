import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../modules/user.services';
import { Http } from '@angular/http';
import { User, Activities, Room } from '../modules/user';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
 
  list = new Activities();
  me: User;


  constructor(private http: Http,  private router: Router) { 
      
  }
  
  ngOnInit() {
    
 
}



  
}

