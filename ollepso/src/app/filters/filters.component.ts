import { Component, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit,OnDestroy {
  @Output() showCatagory = new EventEmitter<string>()

  categoriesSubscription: Subscription | undefined
  catagories: Array<string> | undefined
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe((response)=>{
      this.catagories = response
    })
  }

  onShowCatagory(catagory: string): void{
    this.showCatagory.emit(catagory)
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe()
    }  
  }
  

}
