import { Component, OnInit } from '@angular/core';
import {Product} from "../interface/product";
import {PaginatorService} from "../service/paginator.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
  totalElements: number=0;
  products: Product [] = [];
  constructor(private paginator: PaginatorService ) { }

  ngOnInit(): void {
    this.getListRequest({page:0, size:3})
  }
  private getListRequest(request: any){
    this.paginator.pageUser(request).subscribe(data=>{
      console.log(data);
      // @ts-ignore
      this.products = data['content'];
      // @ts-ignore
      console.log(data['content'])
      // @ts-ignore
      this.totalElements = data['totalElements'];
      // @ts-ignore
      console.log(data['totalElements'])
    })
  }
  nextPage(event: PageEvent){
    const request = {};
    // @ts-ignore
    request['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    this.getListRequest(request);
  }
}
