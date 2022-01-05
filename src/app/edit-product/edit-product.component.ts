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
    id:0,
    code: '',
    name: '',
    description: '',
    img:''
  };
  id: number = 0;

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private route: Router) {
    this.activateRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.productService.getProductById(this.id).subscribe(product =>{
        this.product = product;
      });
    })
  }

  ngOnInit(): void {
  }

  editProduct(id: number) {
    this.productService.editProduct(id, this.product).subscribe(()=>{
      this.route.navigateByUrl('/list')
    })
  }
}
