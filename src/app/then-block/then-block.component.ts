import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-then-block',
  templateUrl: './then-block.component.html',
  styleUrls: ['./then-block.component.css']
})
export class ThenBlockComponent implements OnInit {


  isValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateBlock(){
    this.isValid = false;
  }

}
