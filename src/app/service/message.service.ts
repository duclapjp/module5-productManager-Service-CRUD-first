import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MessageChat} from "../interface/message-chat";
import {environment} from "../../environments/environment";
const APT_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<MessageChat[]>{
    const receiptId = window.sessionStorage.getItem("ReceiptId");
    console.log('id messageService: ' + window.sessionStorage.getItem("ReceiptId"));
    return this.http.get<MessageChat[]>(APT_URL+"/messages/"+receiptId+"/"+2);
  }
}
