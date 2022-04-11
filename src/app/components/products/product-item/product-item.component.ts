import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product:Product={name:"",count:0};;
  @Input() public index:number=0;

  @Output() public afterRemoveProduct=new EventEmitter<number>();
  

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  public deleteProduct(){
    this.afterRemoveProduct.emit(this.index);
  }

}
