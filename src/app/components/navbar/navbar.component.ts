import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart:number;
  sub:any;
  constructor(private _productService:ProductsService) { }

  ngOnInit() {
    this._productService.currentCount.subscribe(count => this.cart = count);
  }

}
