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

  addItem(thing: string, what: string, calories: string){
      let newThing = new List(thing, what, calories);
      this.Lists.push(newThing);
      this.calCount = (this.calCount + parseInt(calories));
  }

  removeItem(List: any){
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
      calories: string;
      descr: string;
  
      constructor(thing: string, what: string, calories: string){
          this.thing = thing;
          this.what = what;
          this.calories = calories;
          this.descr = this.thing + ' , ' + this.what + ' , ' + this.calories ;
      }

     
    }