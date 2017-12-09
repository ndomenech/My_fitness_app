import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



submitActivity(e: MouseEvent, exercise: string, amount: number){
  e.preventDefault();
  const data = { text: exercise.text, text: amount.text };
  this.http.post(this.apiRoot , data).subscribe(res=>{
      this.me.quotes.push( res.json() );            
  })
}

chooseExercise(e: MouseEvent, i: number){
  e.preventDefault();
  this.http.post(this.apiRoot , { i: i }).subscribe(res=>{
  })
}

$(function(){

$('#actList-placeholder').load('_actList.html', function (){
    $('#btn1').click(function addAct(){
      const excerice = $('#userExercise').val();
      const amount = $('#userAmount').val();
      $('#activityList ul').append('<li class=\'list-group-item\' >' + excerice + ' , ' + amount + '</li>');
})
}
);}
);

