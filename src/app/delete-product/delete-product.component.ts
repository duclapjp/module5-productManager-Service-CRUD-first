import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product={
    code:'',
    name:'',
    description:''
  }
  id: number=0;
  constructor(private productService: ProductService, private activeRoute: ActivatedRoute,private route: Router) {
    this.activeRoute.paramMap.subscribe(paraMap=>{
      this.id = Number(paraMap.get('id'));
      this.product = productService.getProductById(this.id);
    })
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.productService.deleteProductById(this.id);
    this.route.navigate(['/list'])
  }
}
