import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product: Product = {
    code:'',
    name: '',
    description: ''
  };
  id: number=0;

  constructor(
    private prs: ProductService,
    private route: Router,         //  là:   product/*
    private activeRoute: ActivatedRoute        // là : product/id
  )  {
    this.activeRoute.paramMap.subscribe(paraMap=>{
      this.id = Number(paraMap.get('id'));
      this.product = prs.getProductById(this.id);
    })
  }

  ngOnInit(): void {
  }
  getProductById() {
    return this.prs.getProductById(this.id)
  }
}
