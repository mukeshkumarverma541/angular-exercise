import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'https://test-project-database-angular-default-rtdb.firebaseio.com/products.json';
  private headers = new HttpHeaders({
   'Content-type' : 'muktapplication/json' 
  })


  saveProducts(products:any){
    return this.http.put(this.url, products, {headers: this.headers})
  }

  fetchProducts(){
   return this.http.get(this.url);
  }

  getDataTitle(){
      return  this.http.get('https://test-project-database-angular-default-rtdb.firebaseio.com/dataTitle.json');
  }

  deleteProduct(){
    this.http.delete(this.url);
  }
}
