import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  product :any;

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  selectProduct(val:any){
    this.product = val.target.value;
    this.toast.success('' + this.product);
    console.log(val.target.value);
    console.log(this.product);
  }
}
