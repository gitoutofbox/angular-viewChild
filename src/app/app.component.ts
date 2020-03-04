import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, ViewContainerRef } from '@angular/core';
import { ModalWindowComponent } from './modal-window/modal-window.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @ViewChild('myModal', { static: true, read: ElementRef }) myModalInComponent: ElementRef;
  @ViewChild(ModalWindowComponent, { static: true, read: ModalWindowComponent }) ModalWindowComponent: ModalWindowComponent;

  showModal: boolean = false;

  ngOnInit() {
  }

 
}
