import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { CalenderDateComponent } from './calender-date/calender-date.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';
import { GreetMessageComponent } from './greet-message/greet-message.component';
import { TestComponent } from './test/test.component'
@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    CalenderDateComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GreetMessageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
