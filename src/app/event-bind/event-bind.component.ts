import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  addToCart(val:any) {
    this.toastr.success('Product = ' + val);
    }

}
