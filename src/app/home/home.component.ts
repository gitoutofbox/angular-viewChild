import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren, ContentChild, AfterContentInit } from '@angular/core';
import { CalenderDateComponent } from '../calender-date/calender-date.component'
import { GreetMessageComponent } from '../greet-message/greet-message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('myCalenderDate',{static: false, read: ElementRef}) myCalenderDate: ElementRef;
  @ViewChild(CalenderDateComponent,{static: true, read: CalenderDateComponent}) calenderDateComponent: CalenderDateComponent;
  @ContentChild(CalenderDateComponent) calenderDateComponentContent: CalenderDateComponent;

  @ContentChild(GreetMessageComponent) greetMessageComponent: GreetMessageComponent;
  constructor() { }

  ngOnInit(): void {  
    console.log('access to component', this.calenderDateComponent)  
    this.calenderDateComponent.userName = 'Sachin';
    
    setInterval(() =>{
      this.calenderDateComponent.getMessage();      
    }, 1000)
  }
  ngAfterViewInit() {
    this.myCalenderDate.nativeElement.querySelector('.greeting-message').style.backgroundColor = '#8e3f0c'
    this.myCalenderDate.nativeElement.querySelector('.greeting-message').style.padding = '5px 0'
  }
  ngAfterContentInit() {
    console.log('greetMessageComponent', this.greetMessageComponent);
    console.log('calenderDateComponentContent', this.calenderDateComponentContent);
  }
}
