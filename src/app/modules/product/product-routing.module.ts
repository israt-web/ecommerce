import { OrderRoutingModule } from './../orders/order-routing.module';
import { ProducttileComponent } from './component/producttile/producttile.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';


const prodRoutes: Routes = [
  {
    path: 'product' ,
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'product-title',
        component: ProducttileComponent
      }
    ]
  },
  // {
  //   path: 'order',
  //   loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
  // },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( prodRoutes),
    OrderRoutingModule
  ]
})
export class ProductRoutingModule { }
