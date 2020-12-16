import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ItemlistComponent } from './itemlist/itemlist.component';


@NgModule({
  declarations: [ProductlistComponent, ItemlistComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
