import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  activeClass : boolean = true;
  color : any = '#fff ';
  isActive: boolean = true;

  salesVolume: any = '100000';

  constructor() { }

  ngOnInit(): void {
  }

}
