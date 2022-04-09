import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {

  constructor(private service : Service1Service) { }

  ngOnInit(): void {
  }
  alertService(){
    this.service.alertMessage();
  }

}
