import { Component, OnInit } from '@angular/core';
import {Product} from "../interface/product";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product={
    id:0,
    code:'',
    name:'',
    description:'',
    img:''
  }
  id: number=0;
  constructor(private productService: ProductService, private activeRoute: ActivatedRoute,private route: Router) {
    this.activeRoute.paramMap.subscribe(paraMap=>{
      this.id = Number(paraMap.get('id'));
      productService.getProductById(this.id).subscribe(product=>{
        this.product = product;
      });
    })
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.deleteProductById(this.id).subscribe(()=>{
      this.route.navigateByUrl('/list')
    });

  }
}
