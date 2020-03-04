import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.sass']
})
export class ModalWindowComponent implements OnInit {
  isMinimized:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  minimize() {
    this.isMinimized = !this.isMinimized;
  }
}
