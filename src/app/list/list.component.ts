import { Component } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products: Product[] = [];
  selectedProducts: Product[] = [];
  displayDialog: boolean = false;
  newProductForm: FormGroup;

  constructor(private productService: ProductService) {
    this.newProductForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
    });

  }

  ngOnInit() {
    this.initializeProducts();

    this.productService.getProductObserver().subscribe({
      next: (currentValue: any) => {
        this.initializeProducts();
      }
    });
  }

  private initializeProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }

  showCreateDialog() {
    this.displayDialog = true;
  }

  onSubmit() {
    console.warn(this.newProductForm.value.name);
    this.displayDialog = false;
    let newProduct = {
      name: this.newProductForm.value.name, price: this.newProductForm.value.price,
      description: this.newProductForm.value.description,
      inventoryStatus:'INSTOCK'
    }

    this.productService.createProduct(newProduct).subscribe((data: any) => {
      console.log(data);
    });
  }


  onCancel() {
    this.displayDialog = false;
  }



}
