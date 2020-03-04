import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { GreetMessageComponent } from '../greet-message/greet-message.component';
import { CalenderDateComponent } from '../calender-date/calender-date.component'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('myCalenderDate',{static: true, read: ElementRef}) myCalenderDate: ElementRef;
  @ViewChild(CalenderDateComponent,{static: true, read: CalenderDateComponent}) calenderDateComponent: CalenderDateComponent;
  @ViewChild('myCalenderDate',{static: true, read: ViewContainerRef }) myCalenderDateComponent: ViewContainerRef ;
  @ViewChild(GreetMessageComponent,{static: true, read: GreetMessageComponent}) greetMessageComponent: GreetMessageComponent;
  
  constructor(public elRef: ElementRef, public VCR: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    setInterval(() =>{
      this.calenderDateComponent.getMessage();
    }, 1000)
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GreetMessageComponent);
    this.myCalenderDateComponent.clear();
    let comp = this.myCalenderDateComponent.createComponent(componentFactory);

    // let dateValue = this.myCalenderDate.nativeElement.querySelector('.date-value').innerHTML;
    // this.myCalenderDate.nativeElement.querySelector('.date-value').innerHTML = comp.injector.get(GreetMessageComponent).elRef.nativeElement
  }
  ngAfterViewInit() {
    // let dateValue = this.myCalenderDate.nativeElement.querySelector('.date-value').innerHTML;
    // let greetMessage =  '';//this.greetMessageComponent.getMessage();
    // // const viewContainerRef = this.myCalenderDateComponent.viewContainerRef;

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GreetMessageComponent);
    // this.myCalenderDateComponent.createComponent(componentFactory);





    // this.myCalenderDate.nativeElement.querySelector('.date-value').innerHTML = `
    // ${greetMessage}
    // ${dateValue}
    // `;
  }
}
