import { Component } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent {

  public productlist:any;
  constructor (private api:ProductsService, private cart:CartService, private toast: NgToastService){}

  ngOnInit(): void{
    this.api.getproduct().subscribe(res=>{
      // console.log(res);
      this.productlist = res;

      this.productlist.forEach((a:any) => {
        Object.assign(a, {quantity :1, total:a.price})
      });
    })
  }

  //add to cart
  addtocart(item:any){
    this.toast.success({detail:"added to basket", summary: 'item has been added', duration:2000});
    this.cart.addtocart(item);
    console.log(item);
  }
}
