import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderNowComponent } from 'src/app/modules/orders/components/order-now/order-now.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductLevel3 } from 'src/app/model/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-producttile',
  templateUrl: './producttile.component.html',
  styleUrls: ['./producttile.component.scss']
})
export class ProducttileComponent implements OnInit {
   product: any = [];
   @Input() mrp: number;
   @Input() id: string;
   @Input() image: string;
  @Input() description:string;
  @Input() name: string;
  @Input() seller: string;
  @Input() sellerLocation: string;
   listOfLevel2Cards: any[] = [];
  constructor(public dialog: MatDialog,
              private prodService: ProductService
   ) { }

  ngOnInit(): void {
    this.prodService.getProduct().subscribe((data) => {
      // console.log(data);
      this.product =  data;
    });
    this.image = 'https://inputs.kalgudi.com' + (this.image);
  }


  openDialog() {
    const dialogRef = this.dialog.open(OrderNowComponent,{
      autoFocus: false
    });
  }


}

