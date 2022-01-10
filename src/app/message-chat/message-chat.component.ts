import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.css']
})
export class MessageChatComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // @ts-ignore
  comeIn(event) {

    const receiptId = event.target.id;
    console.log('id: ' + event.target.id);
    window.sessionStorage.setItem('ReceiptId', String(event.target.id));
    this.router.navigate(["/message-chat-detail/"+receiptId]).then(() => {
      window.location.reload();
    });
  }
}
