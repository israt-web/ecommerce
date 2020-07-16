import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductLevel3 } from 'src/app/model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProduct(): Observable<any> {
    const url = 'https://inputs.kalgudi.com/data/storeProducts/farmer/categories/PLANT_NUTRITION';

    return this.http.get<any>(url);
  }
}
