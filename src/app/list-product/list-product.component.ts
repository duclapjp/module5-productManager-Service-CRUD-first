import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product [] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProduct();
  }

  ngOnInit(): void {
  }
}
