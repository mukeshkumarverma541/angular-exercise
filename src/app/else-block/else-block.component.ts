import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-else-block',
  templateUrl: './else-block.component.html',
  styleUrls: ['./else-block.component.css']
})
export class ElseBlockComponent implements OnInit {

  isValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateBlock() {
    this.isValid = false;
  }

}
