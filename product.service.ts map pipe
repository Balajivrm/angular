///code is for web service call using pipe and map method


/////product.service.ts


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map , retry} from 'rxjs/operators';
import { pipe } from 'rxjs';

export class ProductService{


    private http:HttpClient;

    constructor(http:HttpClient){

        this.http=http;

    }
    get(){
        return this.http.get("http://exp-rest-api.herokuapp.com/api/products");
        pipe(map(res=>res['data'])(5));
    }
}




////product-list.component.ts




import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductService } from '../services/product.service';


@Component({
    selector:'app-product-list',
    template:`
    
    <div class ="container">
    <h1>Product List</h1>
   
    <div *ngFor="let product of products">

    <app-product [product]="product"></app-product>
    </div>
    </div>`


})


export class ProductListComponent{
    products : any;

    constructor(Http:HttpClient){
//    Http.get("http://exp-rest-api.herokuapp.com/api/products")
var svc = new ProductService(Http);  
svc.get()
.subscribe(res=>this.products=res["data"],
        err=>console.log(err)
    )
    }
}
