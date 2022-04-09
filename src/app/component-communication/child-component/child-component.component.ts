import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() productSelected : boolean = false;
  @Input() product: any;
  @Output() cartProduct = new EventEmitter();

  constructor(private toaster : ToastrService) { }

  ngOnInit(): void {
  }


  addToCart(){
      
    this.cartProduct.emit(this.product);
    console.log(this.cartProduct);
    if(this.product === undefined) {
      this.toaster.warning('No Product selected')
    }else {
      this.toaster.success('Product added in the cart ' + this.product); 

    }

  }
}
