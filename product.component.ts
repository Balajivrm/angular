import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from'moment';
import { ProductService } from '../services/product.service';


@Component({
    selector:"app-product",
    template:`
    <div class="card">
    <div class="card-body">
    <img class="img img-thumbnail" width="120" height = "120"[src]="product.image"/>
    <a routerLink="/products/{{product._id}}"> <h3 class="card-title"> {{product.brand | uppercase}}{{product.model | lowercase}}</h3></a>
    <b>{{product.price | currency}}</b>
    <div >InStock:<input type="checkbox" disabled="true"[checked]="product.instock">
    <div>{{product.lastUpdated | date:'MMM-dd-yyyy hh:mm:ss a'}}</div>
    <div>{{product.lastUpdated | time}}</div>

<button class = "btn btn-danger btn-sm"  (click) = "onDelete(product._id)" >Delete</button>
    </div> `
})


export class ProductComponent{
    @Input()
    product:any;

@Output()
notify : EventEmitter<any>;

constructor(private svc: ProductService){
    this.notify = new EventEmitter();
}

   // getRelativeTime(date){
     //   return moment(date).fromNow();
       // }

onDelete(id){
    //console.log(id);
 this.svc.delete(id)
 .subscribe(res=> this.notify.emit(),err =>console.log(err));
    
}

}
