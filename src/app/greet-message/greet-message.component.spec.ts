import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetMessageComponent } from './greet-message.component';

describe('GreetMessageComponent', () => {
  let component: GreetMessageComponent;
  let fixture: ComponentFixture<GreetMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
