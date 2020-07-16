import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderdetailsComponent } from './components/orderdetails/orderdetails.component';
import { OderSuccessComponent } from './components/oder-success/oder-success.component';
import { OrderNowComponent } from './components/order-now/order-now.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ProjectCommonModule } from 'src/app/project-common/project-common.module';
// import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [OrderdetailsComponent, OderSuccessComponent, OrderNowComponent, OrdersComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ProjectCommonModule

  ]
})
export class OrdersModule { }
