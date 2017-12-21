import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Activities, User, Room} from '../modules/user';
import { UserService } from '../modules/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  [x: string]: any;

  member: Room;
  list = new Activities();
  me: User;
  calCount: number;

  currentWeight: number;
  currentCalories: number;
  goalWeight: number;
  goalCalories: number;



  ngOnInit() {
    if(this.user.me == null){
        this.router.navigate(['/login']);
    }
    this.me = this.user.me;
    setInterval(() => this.update(), 1000)
}





  constructor() { 
    this.currentWeight = 0;
    this.currentCalories = 0;
    this.goalWeight = 0;
    this.goalCalories = 0;

  }

  updateGC(goalCalories: number){
    this.goalCalories = goalCalories;
  }

  updateGW(goalWeight: number){
    this.goalWeight = goalWeight;
  }

  updateCC(currentCalories: number){
    this.currentCalories = currentCalories;
  }

  updateCW(currentWeight: number){
    this.currentWeight = currentWeight;
  }

  

}

