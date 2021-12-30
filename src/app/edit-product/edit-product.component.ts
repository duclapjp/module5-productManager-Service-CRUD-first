import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = {
    code:'',
    name:'',
    description:''
  };
  id:number=0;
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private route: Router) {
    this.activateRoute.paramMap.subscribe(paraMap=>{
      this.id = Number(paraMap.get('id'));
      this.product = this.productService.getProductById(this.id);
    })
  }

  ngOnInit(): void {
  }

  editProduct(id: number) {
    this.productService.editProduct(id,this.product)
    this.route.navigate(['/list'])
  }
}
