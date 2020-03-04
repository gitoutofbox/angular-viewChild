import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender-date',
  templateUrl: './calender-date.component.html',
  styleUrls: ['./calender-date.component.sass']
})
export class CalenderDateComponent implements OnInit {
  date = new Date()
  userName: string = 'Robin';
  messageList: Array<string> = [
    "Hello there",
    "how are you doing",
    "Happy days are 2 stay forever",
    "Flowers are so beautiful as you",
    "inspire one's soul"
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
