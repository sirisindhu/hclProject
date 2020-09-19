import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { PRODUCTS } from './product-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // Get Products from mock date
  getProducts(): Product[] {
    return PRODUCTS;
  }
}
