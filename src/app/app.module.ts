import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductNewComponent } from './components/products/product-new/product-new.component';
import { RouterModule, Routes } from '@angular/router';

const prekesRoutes:Routes=[
  { path:'', component:ProductsComponent},
  { path:'new', component:ProductNewComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(prekesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
