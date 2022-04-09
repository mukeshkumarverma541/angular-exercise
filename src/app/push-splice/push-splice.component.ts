import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  users : any = [
   
  ];
  constructor() { }

  ngOnInit(): void {

  }

  createUser(uname:any) {
    console.log(uname.value);
    this.users.push({
      name : uname.value
    })
  }

  removeUser() {
    this.users.splice(this.users.length - 1);
    console.log(this.users);
  }
  removeAll(){
    this.users = [];
  }
  deleteUser(userId:any) {
      this.users.splice(userId, 1);
  }


}
