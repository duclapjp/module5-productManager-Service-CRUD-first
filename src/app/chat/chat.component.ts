import { Component, OnInit } from '@angular/core';
import Pusher from "pusher-js";
import {any} from "pusher-js/types/src/core/utils/collections";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username = 'username';
  messages = [];
  message='';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;
    const pusher = new Pusher('25291c0752d6089a660c',{
      cluster: 'eu'
    });
    const channel = pusher.subscribe('chat');
    channel.bind('message',(data: any)=>{
      // @ts-ignore
      return this.messages.push(data);
    })
  }
  submit(){
    this.http.post('http://localhost:8000/api/messages', {
      username: this.username,
      message: this.message
    }).subscribe(()=>this.message='');
  }
}
