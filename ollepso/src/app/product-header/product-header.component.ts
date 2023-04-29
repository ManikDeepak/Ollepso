import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() itemsCountChange = new EventEmitter<number>()
  @Output() itemsOrderChange = new EventEmitter<string>()
  
  sort='Asc'
  itemsShowCount = 12
  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdate(newSort:string):void{
    this.sort = newSort
    this.itemsOrderChange.emit(newSort)
  }

  onItemsUpdates(count:number):void {
    this.itemsShowCount=count
    this.itemsCountChange.emit(count)
  }

  onColumnsUpdate(colsNum: number):void{
    this.columnsCountChange.emit(colsNum)
  }
}
