import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OderSuccessComponent } from '../oder-success/oder-success.component';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.scss']
})
export class OrderNowComponent implements OnInit {
  product: any= [];
  submitted = false;
  productForm: FormGroup;
  productName: FormControl;
  quantity: FormControl;
  Name: FormControl;
  emailId: FormControl;
  mobileNumber: FormControl;
  address: FormControl;
  constructor( public dialogRef: MatDialogRef<OderSuccessComponent>,
               public fb: FormBuilder,
               public productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['' , Validators.required],
      quantity: [ '' , Validators.required],
      Name: [ '' , Validators.required],
      emailId: [ '' ,[Validators.required, Validators.email]],
      mobileNumber: [ '' , Validators.required],
      address: ['' , Validators.required]
    });
    this.productService.getProduct().subscribe((data) => {
      // console.log(data);
      this.product =  data;
    });
  }
  checkout(){
    this.dialogRef.close();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    // if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //   return false;
    // }
    return (charCode >= 48 && charCode <= 57);
  }


    onSubmit() {
       console.log(this.productForm.value)
}
}
