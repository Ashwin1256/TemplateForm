import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  @Input() parentcomp:string="";

  @Output() outputstring:EventEmitter<string> = new EventEmitter();
  
  outps="this si soutput from child"


  constructor() { }

  ngOnInit(): void {

    console.log(this.parentcomp);
  }

  callevent(){
    this.outputstring.emit(this.outps)
  }

}
