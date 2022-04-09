import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  public placeholderText = 'Enter Name :'

  constructor() { }

  ngOnInit(): void {
  }

}
