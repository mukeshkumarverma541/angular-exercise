import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-subject-behaviour',
  templateUrl: './subject-behaviour.component.html',
  styleUrls: ['./subject-behaviour.component.css']
})
export class SubjectBehaviourComponent implements OnInit {

  uName : any;
  constructor(private service: DesignUtilityService) { }


  ngOnInit(): void {
    this.service.uName.subscribe(data => {
      console.log(data);
      this.uName = data;
    })
    
  }

}
