import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
title="practise Angular";

thiscomment="this is new comment from parent";

     transportation:string[]=["Bus","Auto","plane","train"]

     check:boolean=false;

     validate(value:string){


      if(value==='Bus'){
       this.check= true;
      }
      else
      {
        this.check=false;
      }

     }

     
onSubmit(value:User){
console.log(value)
}

getdata(value:string){

  console.log(value);

}

}
