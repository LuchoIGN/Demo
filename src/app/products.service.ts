import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productos = [
    {
      "nombre": "Leche entera 1Lt",
      "marcas":[
        {
          "marca":"La Serenisima",
          "precio":"55",
          "super":"Carrefour"
        },
        {
          "marca":"La Martona",
          "precio":"38",
          "super":"Carrefour"
        },
        {
          "marca":"Don Atilio",
          "precio":"45",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Leche descremada 1Lt",
      "marcas":[
        {
          "marca":"La Serenisima",
          "precio":"55",
          "super":"Carrefour"
        },
        {
          "marca":"La Martona",
          "precio":"38",
          "super":"Carrefour"
        },
        {
          "marca":"Don Atilio",
          "precio":"45",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Leche larga vide entera 1Lt",
      "marcas":[
        {
          "marca":"La Serenisima",
          "precio":"75",
          "super":"Carrefour"
        },
        {
          "marca":"Don Atilio",
          "precio":"65",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Yerba 500Gr",
      "marcas":[
        {
          "marca":"Amanda",
          "precio":"65",
          "super":"Carrefour"
        },
        {
          "marca":"La Tranquera",
          "precio":"70",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Yerba 1Kgr",
      "marcas":[
        {
          "marca":"Amanda",
          "precio":"120",
          "super":"Carrefour"
        },
        {
          "marca":"La Tranquera",
          "precio":"130",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Fideos Tallarin 500Gr",
      "marcas":[
        {
          "marca":"Lucchetti",
          "precio":"42",
          "super":"Carrefour"
        },
        {
          "marca":"Knor",
          "precio":"40",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Fideos Tirabuzon 500Gr",
      "marcas":[
        {
          "marca":"Lucchetti",
          "precio":"42",
          "super":"Carrefour"
        },
        {
          "marca":"Knor",
          "precio":"40",
          "super":"Dia"
        }
      ]
    },
    {
      "nombre": "Pure de tomates 520Gr",
      "marcas":[
        {
          "marca":"Cica",
          "precio":"25",
          "super":"Carrefour"
        },
        {
          "marca":"Arcor",
          "precio":"27",
          "super":"Dia"
        }
      ]
    }
  ]
  cart = {
    "Carrefour":{
      "compras":[],
      "total":0,
      "cantidad":0
    },
    "Dia":{
      "compras":[],
      "total":0,
      "cantidad":0
    },
    "total":0
  };
  private countSource = new BehaviorSubject<number>(0);
  currentCount = this.countSource.asObservable();
  constructor() { }

  private GetTotal():number{
    var x: number = 0;
    var total: number = 0;
   
    this.cart["Carrefour"]["total"]=0;
    this.cart["Dia"]["total"]=0;
    this.cart["Carrefour"]["cantidad"]=0;
    this.cart["Dia"]["cantidad"]=0;
    this.cart["total"]=0;
    
    this.cart["Carrefour"]["compras"].forEach(item => {
      this.cart["total"]=this.cart["total"] + (parseInt(item.cantidad) * parseInt(item.precio));
      x = x + parseInt(item.cantidad);
      total = total + (parseInt(item.precio)* parseInt(item.cantidad));
      this.cart["Carrefour"]["total"] = this.cart["Carrefour"]["total"] + (item.cantidad * item.precio);
      this.cart["Carrefour"]["cantidad"] = this.cart["Carrefour"]["cantidad"] + parseInt(item.cantidad);
    })
    this.cart["Dia"]["compras"].forEach(item => {
      this.cart["total"]=this.cart["total"] + (parseInt(item.cantidad) * parseInt(item.precio));
      x = x + parseInt(item.cantidad);
      total = total + (parseInt(item.precio)* parseInt(item.cantidad));
      this.cart["Dia"]["total"] = this.cart["Dia"]["total"] + (item.cantidad * item.precio);
      this.cart["Dia"]["cantidad"] = this.cart["Dia"]["cantidad"] + parseInt(item.cantidad);
    })
    this.cart['total']= total;
    return x;
  }
  getCart(){
    return this.cart;
  }

  findProduct(text:string){
    var result = [];
    this.productos.forEach(element => {
      if (element.nombre.toLowerCase().includes(text))
        result.push(element);
    
    });
    return result;
  }
  

  addToCart(item){ 
    var res = item.marca.split('%');
    var x = {
      "super":res[2],
      "nombre": item.nombre,
      "cantidad": item.cantidad,
      "marca":res[0],
      "precio": res[1],
      
    }
    this.cart[res[2]]["compras"].push(x);
    
    this.countSource.next(this.GetTotal());
  }

  
}
