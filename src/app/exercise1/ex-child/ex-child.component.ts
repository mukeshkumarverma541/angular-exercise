import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-ex-child',
  templateUrl: './ex-child.component.html',
  styleUrls: ['./ex-child.component.css']
})
export class ExChildComponent implements OnInit {


  @Input() boxType : any;
  @Input() title!: string;
  @Input() placeholderText !:string;

  @Output() inputEvent = new EventEmitter();

  userCount !: number;
  adminCount !: number;

  constructor(private countService: CountService) { }

  ngOnInit(): void {
    this.countService.userCount.subscribe(res => {
      this.userCount = res;
    })
    this.countService.adminCount.subscribe(res => {
      this.adminCount = res;
    })
  }

  get count(){
    if(this.placeholderText === 'Create admin') {
      return this.adminCount;
    }
    else {
      return this.userCount;
    }
  }

  onCreate(inputVal:any){
    if(inputVal.value.length > 1) {
      if(this.placeholderText === 'Create User') {
        this.userCount = this.userCount + 1;
        this.countService.userCount.next(this.userCount);
      }
      else {
        this.adminCount = this.adminCount + 1;
        this.countService.adminCount.next(this.adminCount);
      }
      this.inputEvent.emit(inputVal.value);
    }
  }

}
