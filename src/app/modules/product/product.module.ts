// import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProducttileComponent } from './component/producttile/producttile.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { OrdersModule } from '../orders/orders.module';
import { OrderNowComponent } from '../orders/components/order-now/order-now.component';
import {  ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCommonModule } from 'src/app/project-common/project-common.module';

@NgModule({
  declarations: [ProducttileComponent, ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
   RouterModule,
   ProjectCommonModule,
    ProductRoutingModule,
    OrdersModule,
    HttpClientModule,


  ],
  exports:[ProducttileComponent],
  providers: [ ProductService],
  entryComponents: [OrderNowComponent]
})
export class ProductModule { }
