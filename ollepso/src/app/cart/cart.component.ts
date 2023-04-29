import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: []}

  dataSource: Array<CartItem> = []
  displayColumns:  Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items
    this.cartService.cart.subscribe((_cart: Cart) =>{
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }

  getTotal(items: Array<CartItem>):number{
    return this.cartService.getTotal(items)
  }

  onClearCart() :void{
    this.cartService.clearCart()
  }

  onRemoveFromCart(item:CartItem):void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem):void{
    this.cartService.addtoCart(item)
  }

  onRemoveQuantity(item: CartItem):void{
    this.cartService.removeQuantity(item)
  }

  onCheckout():void{
    this.http.post('http://localhost:4242/checkout',{
      items: this.cart.items
    }).subscribe(async(res:any)=>{
      let stripe = await loadStripe('pk_test_51MbMZ2SDXGYFEWooJ1JV7K9g6A4N8xcDDBaSHZxDZwLwoiEYfaBmx0E4nnk7TM5tIwNBeBUzxGXktEjc4ZNPHAhF00KTni9MsN')
      stripe?.redirectToCheckout({
        sessionId:res.id
      })
    })
  }
}
