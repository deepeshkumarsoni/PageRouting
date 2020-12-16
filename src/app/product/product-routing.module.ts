import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ItemlistComponent   
  },
  {
    path: 'productlist',
    pathMatch: 'full',
    component: ProductlistComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
