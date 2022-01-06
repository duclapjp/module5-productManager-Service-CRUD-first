import {Component, OnInit} from '@angular/core';
import {Product} from "../interface/product";
import {ProductService} from "../service/product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product = {
    id:0,
    code:'',
    name: '',
    description: '',
    img:''
  };
  id: number=0;

  constructor(
    private prs: ProductService,
    private route: Router,
    private activeRoute: ActivatedRoute
  )  {
    this.activeRoute.paramMap.subscribe(paraMap=>{
      this.id = Number(paraMap.get('id'));
      prs.getProductById(this.id).subscribe(product=>{
        this.product = product
      });
    })
  }

  ngOnInit(): void {
  }
  getProductById() {
    return this.prs.getProductById(this.id).subscribe()
  }
}
