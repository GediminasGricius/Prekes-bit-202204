import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public productCount:number=0;

  constructor(private productService:ProductService){
    this.productCount=this.productService.getProductsCount();

    this.productService.onProductsChange.subscribe(()=>{
      this.productCount=this.productService.getProductsCount();
    });

  }

  ngOnInit(): void {
    
  }

}
