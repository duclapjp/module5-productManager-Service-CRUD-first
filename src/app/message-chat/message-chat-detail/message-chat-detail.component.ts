import { Component, OnInit } from '@angular/core';
import {SocketService} from "../../service/socket.service";
import {MessageChat} from "../../interface/message-chat";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-message-chat-detail',
  templateUrl: './message-chat-detail.component.html',
  styleUrls: ['./message-chat-detail.component.css']
})
export class MessageChatDetailComponent implements OnInit {

  receiptId:number = 0;
  // @ts-ignore
  message: MessageChat= {};
  form:any= {};
  constructor(
    public socketService: SocketService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRouter.params.subscribe((params: Params) => {
      this.receiptId = params['id'];
      window.sessionStorage.setItem('ReceiptId', String(this.receiptId));
    })
  }

  ngOnInit(): void {
    this.socketService.connect();
  }

  createMessage() {
    // @ts-ignore
    this.message = {
      message: this.form.message,
      sender: {
        id: 2,
      },
      receiptVer: {
        id: this.receiptId,
      },
      status: 0,
      time: new Date()
    }
    this.socketService.createMessage(this.message);
    return false;
  }

  outRoom() {
    window.sessionStorage.clear();
    this.router.navigate(['/message-chat']);
  }
}
