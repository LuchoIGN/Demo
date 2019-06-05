import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.css']
})
export class CompletionComponent implements OnInit {
  cart = {}
  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.cart = this._productService.getCart();
    console.log(this.cart);
  }

}
