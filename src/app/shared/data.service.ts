import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  products: Product[] = [];

  constructor() { }
  createDb() {
    this.products = [
      { id: 1, name: 'Product-1', price: 1000, description: 'Product description number PO1', inventoryStatus: 'LOWSTOCK' },
      { id: 2, name: 'Product-2', price: 2000, description: 'Product description number PO2', inventoryStatus: 'OUTOFSTOCK' },
      { id: 3, name: 'Product-3', price: 3000, description: 'Product description number PO3', inventoryStatus: 'LOWSTOCK' },
      { id: 4, name: 'Product-4', price: 4000, description: 'Product description number PO4', inventoryStatus: 'INSTOCK' },
      { id: 5, name: 'Product-5', price: 5000, description: 'Product description number PO5', inventoryStatus: 'OUTOFSTOCK' }
    ];

    return { products: this.products };

  }
}