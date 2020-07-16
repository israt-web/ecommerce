import { OderSuccessComponent } from './components/oder-success/oder-success.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const orderRoutes: Routes = [
  {
    path: 'order' ,
    component: OrdersComponent,
    children: [
      {
        path: 'buy-now' ,
        component: OrderNowComponent
      },
      {
        path: 'order-list' ,
        component: OderSuccessComponent
      }
    ]
   },

]
@NgModule({
  imports: [CommonModule,RouterModule.forChild(orderRoutes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
