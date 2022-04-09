import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('box')
  box!: ElementRef;

  constructor() { }


  ngOnInit(): void {
   }

  ngAfterViewInit(): void {
    this.box.nativeElement.style.backgroundColor = '#ff4159 ';
  }

}
