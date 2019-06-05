import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products = [];
  chart = [];
  selectedOption:string;
  constructor(private _productService: ProductsService) { }


  ngOnInit() {

  }
  findProduct(value:string){
    
    this.products = this._productService.findProduct(value.toLowerCase());
    
  }
  addtoCart(item, marca, cantidad){
    var x = {
      "nombre": item,
      "marca":marca,
      "cantidad": cantidad
    };
    this._productService.addToCart(x);
  }
}
