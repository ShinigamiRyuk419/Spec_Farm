import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-viewbasket',
  templateUrl: './viewbasket.component.html',
  styleUrls: ['./viewbasket.component.css']
})
export class ViewbasketComponent implements OnInit {
  // Score = "1";
  // inputValue = 0; 

  // @Input() numVal : number = 0;

  // receiveAdd(){
  //   this.numVal++
  //   this.Score = this.numVal.toString();
  // }

  // receiveSubtract(){
  //   if (this.numVal > 1 ) {
  //     this.numVal--
  //     this.Score = this.numVal.toString();
      
  //   }
  // }
  public products!:any[];
  public grandtotal:number =0;
    constructor(private cart: CartService,private toast: NgToastService){}

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
      this.products = res;
      this.grandtotal =this.cart.gettotalprice();
    })
  }

  emptycart(){
    this.toast.warning({detail:"deleted all from basket", summary: 'all items have been deleted', duration:3000});
    this.cart.removeallcart();
  }

  delete(item: any){
    this.toast.warning({detail:"deleted from basket", summary: 'item has been deleted', duration:2000});
    this.cart.removecartitem(item)
  }
}
