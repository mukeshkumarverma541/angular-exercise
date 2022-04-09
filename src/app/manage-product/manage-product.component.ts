import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  isLoading = false;

  dataTitle = this.service.getDataTitle();

  products = [
    {
      id : 'P1',
      name: 'Laptop',
      price: 12000
    }
  ]

  @ViewChild('id') id!:ElementRef;
  @ViewChild('name') name !:ElementRef;
  @ViewChild('price') price !:ElementRef;
  
  editMode = false;
  editIndex !: number;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
   this.fetchProduct();
  }

  addProduct(id:any, name:any, price:any){

    if(this.editMode) {
      this.products[this.editIndex] = {
        id : id.value,
        name: name.value,
        price: price.value
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
  
    } else {
      this.products.push({
        id: id.value,
        name :name.value,
        price: price.value
      })
    }
    this.onSaveProduct();
 }

  onSaveProduct(){
    this.service.saveProducts(this.products).subscribe(data => {
      console.log(data);
    })
  }

  fetchProduct(){
   this.isLoading = true;
    this.service.fetchProducts().subscribe(res => {
      console.log(res); 
      const data = JSON.stringify(res);
      this.products = JSON.parse(data);
      this.isLoading = false;  
      console.log(this.products);
    }) 
  }

  deleteProduct(id:any){
    if(confirm('Do You want to delete this product ?')) {
      this.products.splice(id, 1);
      this.onSaveProduct();
    }
  }


  editProduct(id:any){
    this.editMode= true;
    this.editIndex = id;
    console.log(this.products[id]);
    this.id.nativeElement.value = this.products[id].id;
    this.name.nativeElement.value = this.products[id].name;
    this.price.nativeElement.value = this.products[id].price;

  }

}
