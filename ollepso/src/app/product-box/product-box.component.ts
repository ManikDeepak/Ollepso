import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false 
  @Input() product: Product | undefined ;

  @Output() addtoCart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onAddtoCart() : void{
    this.addtoCart.emit(this.product)
  }
}
