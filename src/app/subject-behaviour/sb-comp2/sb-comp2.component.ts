import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-sb-comp2',
  templateUrl: './sb-comp2.component.html',
  styleUrls: ['./sb-comp2.component.css']
})
export class SbComp2Component implements OnInit {

  userName : any;

  constructor(private service: DesignUtilityService) { }

  ngOnInit(): void {
    this.service.uName.subscribe(data => {
      this.userName = data;
    })

  }
  updateUser(val:any) {
    this.service.uName.next(val.value);
    console.log(this.userName);
  }

}
