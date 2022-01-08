import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {Product} from "../interface/product";
import {ProductService} from "./product.service";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  listProduct: Product [] = [];
  greetings: string[] = [];
  stompClient: any;
  constructor(private productService: ProductService) {
    this.getAllProduct();
  }
  connect(){
    // @ts-ignore
    const ws = new SockJS(`${API_URL}/ws`)
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () =>{
      // @ts-ignore
      this.stompClient.subscribe('/topic/product',data=>{
        console.log('data=>'+data.body);
        const product = JSON.parse(data.body);
        console.log(product);
        this.listProduct.push(product);
      })
    })
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      // console.log('get all product'+ JSON.stringify(data));
      this.listProduct = data;
      console.log('listProduct'+this.listProduct)
    })
  }
  disConnect(){
    if (this.stompClient!=null){
      this.stompClient.disConnect();
    }
  }

  createProductUsingWebsocket(product: Product){
    this.stompClient.send('/app/products',{},JSON.stringify(product));
  }
}
