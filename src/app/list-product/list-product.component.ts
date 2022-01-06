import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../interface/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product [] = [];
  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data =>{
      this.products = data
    })
  }
}
