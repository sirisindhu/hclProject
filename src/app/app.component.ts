import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent implements OnInit{
  products: Product[];

  constructor(private productService: ProductService) { }

  // Fetching the products from Service
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
