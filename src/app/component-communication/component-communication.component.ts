import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent implements OnInit {
  
  item: any;
  itemSelected : boolean = false;
  cartProductName : any;  

  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
 
  }

  onSelectProduct(item:any) {
    console.log(item);
    this.item = item;
    this.itemSelected = true;
  }

  cartProduct(cartItem:any){
    this.cartProductName = cartItem;
  }
 
}
