import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {

  products: Product[] = [];

  statuses: SelectItem[] = [{ label: 'In Stock', value: 'INSTOCK' }, { label: 'Low Stock', value: 'LOWSTOCK' }, { label: 'Out of Stock', value: 'OUTOFSTOCK' }];

  clonedProducts: { [s: string]: Product; } = {};

  constructor(private productService: ProductService, private messageService: MessageService) {
    this.productService.getProductObserver().subscribe({
      next: (currentValue: any) => {
        this.initializeProducts();
      }
    });
  }

  ngOnInit() {
    this.initializeProducts();
  }

  private initializeProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

  onRowEditInit(product: Product) {
    if (product.id) {
      this.clonedProducts[product.id] = { ...product };
    }
  }

  onRowEditSave(product: Product) {
    if (product.price && product.id) {
      if (product.price > 0) {
        this.productService.updateProduct(product).subscribe((data: any) => {
          this.initializeProducts();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product ' + product.name + ' is updated' });
        });

      }
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid inputs' });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    if (product.id) {
      this.initializeProducts();
    }
  }

  onRowDelete(product: Product, index: number) {
    if (product.id) {

      this.productService.deleteProduct(product.id).subscribe((data: any) => {
        this.initializeProducts();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product ' + product.name + ' is deleted' });
      });
    }
  }
}
