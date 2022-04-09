import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-sb-comp1',
  templateUrl: './sb-comp1.component.html',
  styleUrls: ['./sb-comp1.component.css']
})
export class SbComp1Component implements OnInit {


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
