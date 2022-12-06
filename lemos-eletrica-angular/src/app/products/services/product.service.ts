import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/Products';
import { environment } from 'src/environments/environment';
import { Response } from 'src/app/shared/interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}products`

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      first(),
      //delay(5000),
      tap(product => console.log(product))
    );
  }
}
