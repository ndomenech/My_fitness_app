import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  calCount: number;

  Lists: Array<List>;
  constructor(){
      this.Lists = [];
      this.calCount = 0;
  }

  addItem(thing, what, calories){
      let newThing = new List(thing, what, calories);
      this.Lists.push(newThing);
      this.calCount = (this.calCount + parseInt(calories));
  }

  removeItem(List){
      let index = this.Lists.indexOf(List);
      //this.calCount = this.Lists[index].getCal();
      this.Lists.splice(index,1);
  }

  resetCal(){
    this.calCount = 0;
  }


  ngOnInit() {
  }

}


export class List{
  
      thing: string;
      what: string;
      calories: number;
      descr: string;
  
      constructor(thing, what, calories){
          this.thing = thing;
          this.what = what;
          this.calories = calories;
          this.descr = this.thing + ' , ' + this.what + ' , ' + this.calories ;
      }

     
    }