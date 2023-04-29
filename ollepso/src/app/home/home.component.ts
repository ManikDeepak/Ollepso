import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { StoreService } from '../services/store.service';

const ROWS_HEIGHT: {[id:number] : number}= {1:400,3:335,4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  catagory : string | undefined
  products: Array<Product> | undefined
  sort='desc'
  count='12'
  productSubscriptioon: Subscription | undefined

  constructor(private cartService: CartService, private storeService: StoreService) { }
  
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void{
    this.productSubscriptioon = this.storeService.getAllProducts(this.count,this.sort,this.catagory)
    .subscribe((_products)=>{
      this.products = _products
    })
  }

  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]

  }

  onAddtoCart(product: Product):void{
    this.cartService.addtoCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  onShowCatagory(newCatagory: string): void{
    this.catagory = newCatagory
    this.getProduct()
  }

  onItemsCountChange(newcount: number):void{
    this.count = newcount.toString()
    this.getProduct()
  }

  onItemsOrderChange(order: string): void{
    this.sort = order
    this.getProduct()

  }

  ngOnDestroy(): void {
      if(this.productSubscriptioon){
        this.productSubscriptioon.unsubscribe() 
      }
  }
}
