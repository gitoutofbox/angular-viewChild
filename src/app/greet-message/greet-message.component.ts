import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greet-message',
  templateUrl: './greet-message.component.html',
  styleUrls: ['./greet-message.component.sass']
})
export class GreetMessageComponent implements OnInit {
  messageList: Array<string> = [
    "Hello there",
    "how are you doing"
  ];
  greetMessage: string = '';
  constructor() { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.greetMessage = this.messageList[Math.floor(Math.random() * this.messageList.length)];
  }
}
