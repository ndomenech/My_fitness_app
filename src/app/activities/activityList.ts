import { Component, Input, Output, EventEmitter } from '@angular/core';

  
@Component({
   selector: 'app-my-activity',
   template: `
    
          <ul class="list-group list-group-flush" > <button (click)='OnClick()'>remove</button>
          
          </ul>
          
             
   `
})
export class MyActivityComponent{
 @Input() exercise: string;
 @Input() whatDid: string;
 @Input() calories: number;
 
 @Output() DeleteClicked: EventEmitter<string> = new EventEmitter<string>();
 
 OnClick(){
   
   this.DeleteClicked.emit('You pinged ' 
     + this.exercise + ' ' 
     + this.whatDid 
     + (this.calories == 1? ' time' : ' times'));
 }
}