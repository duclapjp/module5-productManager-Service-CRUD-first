import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {Product} from "../interface/product";
import {ProductService} from "./product.service";
import {MessageService} from "./message.service";
import {MessageChat} from "../interface/message-chat";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  messageList: MessageChat[] = [];
  listProduct: Product [] = [];
  greetings: string[] = [];
  stompClient: any;
  constructor(private productService: ProductService, private messageService: MessageService) {
    // this.getAllProduct();
    this.getAllMessage();
  }
  connect(){
    const receiptId = window.sessionStorage.getItem('ReceiptId');
    // @ts-ignore
    const ws = new SockJS(`${API_URL}/ws`)
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () =>{

      // @ts-ignore
      this.stompClient.subscribe('/topic/message/'+receiptId,data=>{
        console.log('data=>'+data.body);
        const message = JSON.parse(data.body);
        console.log('message: '+message);
        this.messageList.push(message);
      })
    })
  }
  // getAllProduct(){
  //   this.productService.getAllProduct().subscribe(data=>{
  //     // console.log('get all product'+ JSON.stringify(data));
  //     this.listProduct = data;
  //     console.log('listProduct'+this.listProduct)
  //   })
  // }
  disConnect(){
    if (this.stompClient!=null){
      this.stompClient.disConnect();
    }
  }

  createProductUsingWebsocket(product: Product){
    this.stompClient.send('/app/products',{},JSON.stringify(product));
  }
  getAllMessage(){
    this.messageService.getAll().subscribe(data=>{
      this.messageList = data;
      console.log("message=> " + this.messageList);
    })
  }
  createMessage(messageChat: MessageChat){
    const receiptId = window.sessionStorage.getItem('ReceiptId');
   this.stompClient.send('/app/messages',{},JSON.stringify(messageChat));
  }
}
