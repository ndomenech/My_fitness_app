import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../modules/user.services';
import { Http } from '@angular/http';
import { User, Lists } from '../modules/user';



@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
 
  list = new Lists();
  me: User;


  constructor(private http: Http, public user: UserService, private router: Router) { }
  
  ngOnInit() {
    if(this.user.me == null){
        this.router.navigate(['/login']);
    }
    this.me = this.user.me;
    setInterval(()=> this.update(), 1000)
}

update(){
    this.http.get(this.user.apiRoot + '/game/room').subscribe( data =>{
        this.list = data.json();
    });
}

  
}

