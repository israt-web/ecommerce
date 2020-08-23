import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

public login(request: any): Observable<any> {
  const url = `${environment.baseUrl}/rest/v1/profiles/mobilelogin`;

  return this.http.post(url,request);

  
}
}
