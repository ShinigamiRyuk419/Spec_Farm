import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

declare var switchForm: any;
declare var showSlides: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public totalitem =0;
  title = 'SpecializationProject';

  constructor(private cart:CartService){}

  ngOnInit() {
    new switchForm();
    new showSlides();

    this.cart.getproduct().subscribe(res=>{
      this.totalitem = res.length;
      })
  }
}
