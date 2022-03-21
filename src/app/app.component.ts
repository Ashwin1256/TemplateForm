import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
title="practise Angular";

thiscomment="this is new comment from parent";

getdata(value:string){

  console.log(value);

}

}
