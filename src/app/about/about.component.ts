import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ModalWindowComponent } from '../modal-window/modal-window.component'
import { TestComponent } from '../test/test.component'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('myModal', { static: true, read: ElementRef }) myModalInComponent: ElementRef;
  @ViewChild(ModalWindowComponent, { static: true, read: ModalWindowComponent }) ModalWindowComponent: ModalWindowComponent;
  @ViewChild(TestComponent, { static: true, read: TestComponent }) TestComponent: TestComponent;

  constructor() { }

  ngOnInit(): void {
    this.ModalWindowComponent.isMinimized = false;
  }

  ngAfterViewInit() {
    console.log('TestComponent', this.TestComponent)
    let elem = this.myModalInComponent.nativeElement;

    if (typeof elem !== 'undefined') {
      let header = elem.querySelector('span.header-text');
      let body = elem.querySelector('div.modal-body');

      header.innerHTML = 'Hello Header changed as viewchild';
      (body && typeof body !== 'undefined') && (body.innerHTML = 'Hi Body changed as viewchild');
    }
  }



}
