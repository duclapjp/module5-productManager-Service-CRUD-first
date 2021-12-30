import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product= {
    code:'',
    name:'',
    description:''
  }
  constructor(private productService: ProductService,private route: Router) { }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.createNewProduct(this.product);
    this.route.navigate(['/list'])
  }
}
