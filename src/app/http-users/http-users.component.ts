import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-http-users',
  templateUrl: './http-users.component.html',
  styleUrls: ['./http-users.component.css']
})
export class HttpUsersComponent implements OnInit {

  users :any;

  constructor(private service : DesignUtilityService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    }) 
  }

}
