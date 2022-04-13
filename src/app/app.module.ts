import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductNewComponent } from './components/products/product-new/product-new.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';

const prekesRoutes:Routes=[
  { path:'', component:ProductsComponent},
  { path:'new', component:ProductNewComponent},
  { path:'edit/:index', component:ProductEditComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductNewComponent,
    NavigationComponent,
    ProductEditComponent
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
