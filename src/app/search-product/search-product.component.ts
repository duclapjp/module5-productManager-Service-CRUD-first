import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../interface/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  products: Product [] = [];
  key: string | null='';
  constructor(private productService: ProductService,
              private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe(paraMap=>{
      this.key = paraMap.get('code');
    })
  }

  ngOnInit(): void {
    // @ts-ignore
   this.productService.getProductByCode(this.key).subscribe(data=>{
     this.products=data;
   });
  console.log(this.products);
  }

}
