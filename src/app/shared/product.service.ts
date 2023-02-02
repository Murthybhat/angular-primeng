import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

import { Observable, Subject } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public productSubject = new Subject<any>();


  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(this.SERVER_URL + 'products');
  }

  public getProduct(productId: any) {
    return this.httpClient.get(`${this.SERVER_URL + 'products'}/${productId}`);
  }
  public createProduct(product: Product) {

    return this.httpClient.post(`${this.SERVER_URL + 'products'}`, product).pipe(
      tap(_ => this.productSubject.next(true))
    );
  }

  public deleteProduct(productId: any) {
    return this.httpClient.delete(`${this.SERVER_URL + 'products'}/${productId}`).pipe(
      tap(_ => this.productSubject.next(true))
    );
  }
  public updateProduct(product: Product) {
    return this.httpClient.put(`${this.SERVER_URL + 'products'}/${product.id}`, product).pipe(
      tap(_ => this.productSubject.next(true))
    );
  }

  getProductObserver(): Observable<any> {
    return this.productSubject.asObservable();
  }


}