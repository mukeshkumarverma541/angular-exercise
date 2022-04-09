import { Component, OnInit } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  public users = [
    {
     'name': '' 
    }
  ];
  public admins = [
    {
     'name': '' 
    }
  ];

  userCount!: number;
  adminCount !: number;

  constructor(private countService : CountService) { }

  ngOnInit(): void {
    this.countService.userCount.subscribe(res => {
      this.userCount = res;
    }) 
    this.countService.adminCount.subscribe(res => {
      this.adminCount = res;
    })
  }

  pushUser(data:any){
    this.users.push({
      name : data
    });
  }

  pushAdmin(data:any) {
    this.admins.push({
      name : data
    })
  }

  removeAdmin(id:any) {
    this.admins.splice(id, 1);
    this.adminCount = this.adminCount - 1;
    this.countService.adminCount.next(this.adminCount);
  }

  removeUser(id:any) {
    this.users.splice(id, 1);
    this.userCount = this.userCount - 1;
    this.countService.userCount.next(this.userCount)
 }
 
}

